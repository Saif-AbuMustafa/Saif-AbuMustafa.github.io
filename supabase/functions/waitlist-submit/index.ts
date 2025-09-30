import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
  country: string;
  city?: string;
  heard_channel: string;
  heard_detail?: string;
  locale: string;
  consent: boolean;
  recaptcha_token: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer_url?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: WaitlistRequest = await req.json();
    console.log("Waitlist submission received for:", data.email);

    // Verify reCAPTCHA
    const recaptchaSecret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (!recaptchaSecret) {
      throw new Error("reCAPTCHA secret not configured");
    }

    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${recaptchaSecret}&response=${data.recaptcha_token}`,
      }
    );

    const recaptchaResult = await recaptchaResponse.json();
    console.log("reCAPTCHA verification result:", recaptchaResult);

    if (!recaptchaResult.success) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Input validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!data.consent) {
      return new Response(
        JSON.stringify({ error: "Consent is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Hash IP address
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    const encoder = new TextEncoder();
    const ipData = encoder.encode(clientIp + Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"));
    const hashBuffer = await crypto.subtle.digest("SHA-256", ipData);
    const ipHash = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    // Generate confirmation token
    const tokenData = encoder.encode(data.email + Date.now() + Math.random());
    const tokenBuffer = await crypto.subtle.digest("SHA-256", tokenData);
    const confirmToken = Array.from(new Uint8Array(tokenBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Check if email already exists
    const { data: existing } = await supabase
      .from("waitlist_leads")
      .select("status")
      .eq("email", data.email.toLowerCase())
      .maybeSingle();

    if (existing) {
      if (existing.status === "confirmed") {
        return new Response(
          JSON.stringify({ 
            message: "already_confirmed",
            status: "confirmed" 
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      } else {
        // Resend confirmation
        const { data: leadData } = await supabase
          .from("waitlist_leads")
          .select("confirm_token")
          .eq("email", data.email.toLowerCase())
          .single();

        if (leadData) {
          await supabase.functions.invoke("waitlist-send-confirmation", {
            body: {
              email: data.email,
              locale: data.locale,
              confirm_token: leadData.confirm_token,
            },
          });
        }

        return new Response(
          JSON.stringify({ 
            message: "confirmation_resent",
            status: "pending_confirm" 
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Insert new lead
    const { error: insertError } = await supabase
      .from("waitlist_leads")
      .insert({
        email: data.email.toLowerCase(),
        country: data.country,
        city: data.city || null,
        heard_channel: data.heard_channel,
        heard_detail: data.heard_detail || null,
        locale: data.locale,
        utm_source: data.utm_source || null,
        utm_medium: data.utm_medium || null,
        utm_campaign: data.utm_campaign || null,
        referrer_url: data.referrer_url || null,
        ip_hash: ipHash,
        user_agent: req.headers.get("user-agent") || null,
        confirm_token: confirmToken,
        status: "pending_confirm",
      });

    if (insertError) {
      console.error("Insert error:", insertError);
      throw insertError;
    }

    // Send confirmation email
    await supabase.functions.invoke("waitlist-send-confirmation", {
      body: {
        email: data.email,
        locale: data.locale,
        confirm_token: confirmToken,
      },
    });

    console.log("Waitlist submission successful for:", data.email);

    return new Response(
      JSON.stringify({ 
        message: "success",
        status: "pending_confirm"
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in waitlist-submit:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);