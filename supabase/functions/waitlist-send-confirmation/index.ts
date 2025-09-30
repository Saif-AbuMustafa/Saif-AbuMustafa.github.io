import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ConfirmationRequest {
  email: string;
  locale: string;
  confirm_token: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, locale, confirm_token }: ConfirmationRequest = await req.json();
    console.log("Sending confirmation email to:", email);

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    const confirmUrl = `${Deno.env.get("SUPABASE_URL")?.replace('.supabase.co', '.lovableproject.com') || 'https://aikeys.ai'}/waitlist/confirm?token=${confirm_token}`;

    // Localized content
    const content = {
      en: {
        subject: "Confirm Your AI KEYS Waitlist Registration",
        title: "Welcome to AI KEYS!",
        body: "Thank you for joining our waitlist. Please confirm your email address to receive early-access updates.",
        button: "Confirm Email",
        footer: "If you didn't sign up for the AI KEYS waitlist, you can safely ignore this email.",
      },
      ar: {
        subject: "تأكيد تسجيلك في قائمة انتظار AI KEYS",
        title: "مرحباً بك في AI KEYS!",
        body: "شكراً لانضمامك إلى قائمة الانتظار. يرجى تأكيد عنوان بريدك الإلكتروني لتلقي تحديثات الوصول المبكر.",
        button: "تأكيد البريد الإلكتروني",
        footer: "إذا لم تقم بالتسجيل في قائمة انتظار AI KEYS، يمكنك تجاهل هذا البريد الإلكتروني بأمان.",
      },
      fr: {
        subject: "Confirmez votre inscription à la liste d'attente AI KEYS",
        title: "Bienvenue chez AI KEYS !",
        body: "Merci de rejoindre notre liste d'attente. Veuillez confirmer votre adresse e-mail pour recevoir les mises à jour d'accès anticipé.",
        button: "Confirmer l'e-mail",
        footer: "Si vous ne vous êtes pas inscrit à la liste d'attente AI KEYS, vous pouvez ignorer cet e-mail en toute sécurité.",
      },
    };

    const lang = (locale === 'ar' || locale === 'fr') ? locale : 'en';
    const text = content[lang];

    const html = `
      <!DOCTYPE html>
      <html dir="${lang === 'ar' ? 'rtl' : 'ltr'}" lang="${lang}">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 20px;
            direction: ${lang === 'ar' ? 'rtl' : 'ltr'};
          }
          .container { background: #ffffff; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #2563eb, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #2563eb, #7c3aed); color: white !important; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">AI KEYS</div>
          </div>
          <h1>${text.title}</h1>
          <p>${text.body}</p>
          <div style="text-align: center;">
            <a href="${confirmUrl}" class="button">${text.button}</a>
          </div>
          <div class="footer">
            <p>${text.footer}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const { error } = await resend.emails.send({
      from: "AI KEYS <onboarding@resend.dev>",
      to: [email],
      subject: text.subject,
      html,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw error;
    }

    console.log("Confirmation email sent successfully to:", email);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in waitlist-send-confirmation:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);