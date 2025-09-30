import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const headers = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "authorization, x-client-info, apikey, content-type",
  "access-control-allow-methods": "POST, OPTIONS"
};

serve(async (req: Request): Promise<Response> => {
  const url = new URL(req.url);

  // CORS preflight
  if (req.method === "OPTIONS") return new Response("ok", { headers });

  // Diagnostics sub-route: /functions/v1/waitlist/diag
  if (url.pathname.endsWith("/diag")) {
    const hasRecaptchaSecret = !!Deno.env.get("RECAPTCHA_SECRET_KEY");
    const hasResendKey = !!Deno.env.get("RESEND_API_KEY");
    const supabaseUrlSet = !!Deno.env.get("SUPABASE_URL");
    const serviceKeySet = !!Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    return new Response(
      JSON.stringify({ hasRecaptchaSecret, hasResendKey, supabaseUrlSet, serviceKeySet }),
      { status: 200, headers }
    );
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "method_not_allowed" }), { status: 405, headers });
  }

  try {
    const {
      email, country, city, heard_channel, heard_detail,
      locale, recaptchaToken, utm_source, utm_medium, utm_campaign, referrer_url
    } = await req.json();

    console.log("Waitlist submission received for:", email);

    // Basic input checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(String(email))) {
      return new Response(JSON.stringify({ error: "invalid_email" }), { status: 400, headers });
    }
    if (!country || !heard_channel) {
      return new Response(JSON.stringify({ error: "missing_required_fields" }), { status: 400, headers });
    }

    // 1) Verify reCAPTCHA on the server
    const recaptchaSecret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!recaptchaSecret || !resendKey) {
      console.error("Config missing: RECAPTCHA_SECRET_KEY or RESEND_API_KEY");
      return new Response(
        JSON.stringify({ error: "config_missing", detail: "RECAPTCHA_SECRET_KEY or RESEND_API_KEY missing" }),
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
      const codes = vJson["error-codes"] ?? [];
      console.error("reCAPTCHA failed:", codes);
      return new Response(JSON.stringify({ error: "recaptcha_failed", codes }), { status: 400, headers });
    }

    // 2) DB upsert
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase credentials missing");
      return new Response(
        JSON.stringify({ error: "config_missing", detail: "SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing" }),
        { status: 500, headers }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const token = crypto.randomUUID();

    const { data: existing, error: existingErr } = await supabase
      .from("waitlist_leads")
      .select("id,status")
      .eq("email", String(email).toLowerCase())
      .maybeSingle();

    if (existingErr) {
      console.error("DB read error:", existingErr);
      return new Response(JSON.stringify({ error: "db_error", detail: existingErr.message }), { status: 500, headers });
    }

    if (existing?.status === "confirmed") {
      console.log("Already confirmed:", email);
      return new Response(JSON.stringify({ ok: true, alreadyConfirmed: true }), { status: 200, headers });
    }

    // Optional privacy-preserving IP hash
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    const encoder = new TextEncoder();
    const ipData = encoder.encode(clientIp + supabaseKey);
    const hashBuffer = await crypto.subtle.digest("SHA-256", ipData);
    const ipHash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("");

    const { error: upsertErr } = await supabase
      .from("waitlist_leads")
      .upsert({
        email: String(email).toLowerCase(),
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
        consent_ts: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, { onConflict: "email" });

    if (upsertErr) {
      console.error("DB upsert error:", upsertErr);
      return new Response(JSON.stringify({ error: "db_error", detail: upsertErr.message }), { status: 500, headers });
    }

    // 3) Send confirmation email via Resend REST API
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
        html: `<p>Tap the button below to confirm your email and join the waitlist.</p><p><a href="${confirmUrl}">Confirm Email</a></p>`
      })
    });

    if (!emailRes.ok) {
      const detail = await emailRes.text();
      console.error("Email send error:", detail);
      return new Response(JSON.stringify({ error: "email_error", detail }), { status: 502, headers });
    }

    console.log("Waitlist submission complete for:", email);
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (e) {
    console.error("Unexpected error:", e);
    return new Response(JSON.stringify({ error: "server_error", detail: String(e) }), { status: 500, headers });
  }
});