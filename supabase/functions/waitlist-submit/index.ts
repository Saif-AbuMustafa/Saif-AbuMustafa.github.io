import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const headers = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "authorization, x-client-info, apikey, content-type",
  "access-control-allow-methods": "POST, OPTIONS"
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "method_not_allowed" }), { status: 405, headers });
  }
  
  try {
    const {
      email, country, city, heard_channel, heard_detail,
      locale, recaptchaToken, utm_source, utm_medium, utm_campaign, referrer_url
    } = await req.json();

    console.log("Waitlist submission received for:", email);

    // 1) Verify reCAPTCHA on the server
    const recaptchaSecret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (!recaptchaSecret) {
      console.error("RECAPTCHA_SECRET_KEY missing");
      return new Response(
        JSON.stringify({ error: "config_missing", detail: "RECAPTCHA_SECRET_KEY missing" }), 
        { status: 500, headers }
      );
    }

    const vRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: recaptchaSecret, response: recaptchaToken || "" })
    });
    const vJson = await vRes.json();
    
    console.log("reCAPTCHA verification result:", vJson);
    
    if (!vJson.success) {
      const errorCodes = vJson["error-codes"] ?? [];
      console.error("reCAPTCHA verification failed:", errorCodes);
      return new Response(
        JSON.stringify({ error: "recaptcha_failed", codes: errorCodes }), 
        { status: 400, headers }
      );
    }

    // 2) DB upsert
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase credentials missing");
      return new Response(
        JSON.stringify({ error: "config_missing", detail: "Supabase credentials missing" }), 
        { status: 500, headers }
      );
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    const token = crypto.randomUUID();
    const { data: existing } = await supabase
      .from("waitlist_leads")
      .select("id,status")
      .eq("email", (email ?? "").toLowerCase())
      .maybeSingle();

    if (existing?.status === "confirmed") {
      console.log("Email already confirmed:", email);
      return new Response(
        JSON.stringify({ ok: true, alreadyConfirmed: true }), 
        { status: 200, headers }
      );
    }

    // Hash IP address for privacy
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    const encoder = new TextEncoder();
    const ipData = encoder.encode(clientIp + supabaseKey);
    const hashBuffer = await crypto.subtle.digest("SHA-256", ipData);
    const ipHash = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    const upsert = await supabase
      .from("waitlist_leads")
      .upsert({
        email: (email ?? "").toLowerCase(),
        country, 
        city, 
        heard_channel, 
        heard_detail, 
        locale,
        utm_source, 
        utm_medium, 
        utm_campaign, 
        referrer_url,
        ip_hash: ipHash,
        user_agent: req.headers.get("user-agent") || null,
        status: "pending_confirm",
        confirm_token: token,
        consent_ts: new Date().toISOString()
      }, { onConflict: "email" });
      
    if (upsert.error) {
      console.error("DB error:", upsert.error);
      return new Response(
        JSON.stringify({ error: "db_error", detail: upsert.error.message }), 
        { status: 500, headers }
      );
    }

    console.log("DB upsert successful for:", email);

    // 3) Send confirmation email via Resend
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      console.error("RESEND_API_KEY missing");
      return new Response(
        JSON.stringify({ error: "config_missing", detail: "RESEND_API_KEY missing" }), 
        { status: 500, headers }
      );
    }
    
    const confirmUrl = `https://aikeys.finance/waitlist/confirm?token=${token}`;
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { 
        "Authorization": `Bearer ${resendKey}`, 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        from: "AI KEYS <noreply@aikeys.finance>",
        to: [email],
        subject: "Confirm your AI KEYS early-access signup",
        html: `
          <h1>Welcome to AI KEYS Early Access</h1>
          <p>Thank you for your interest in AI KEYS! Please confirm your email address to complete your waitlist registration.</p>
          <p><a href="${confirmUrl}" style="display: inline-block; padding: 12px 24px; background-color: #0066cc; color: white; text-decoration: none; border-radius: 4px;">Confirm Email</a></p>
          <p>Or copy and paste this link into your browser:</p>
          <p>${confirmUrl}</p>
          <p>Best regards,<br>The AI KEYS Team</p>
        `
      })
    });
    
    if (!emailRes.ok) {
      const detail = await emailRes.text();
      console.error("Email send error:", detail);
      return new Response(
        JSON.stringify({ error: "email_error", detail }), 
        { status: 502, headers }
      );
    }

    console.log("Confirmation email sent successfully to:", email);

    return new Response(
      JSON.stringify({ ok: true }), 
      { status: 200, headers }
    );
  } catch (e) {
    console.error("Unexpected error:", e);
    return new Response(
      JSON.stringify({ error: "server_error", detail: String(e) }), 
      { status: 500, headers }
    );
  }
});