// Cloudflare Pages Function: /api/contact
// Receives confidential inquiries and dispatches them via Resend API

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface InquiryBody {
  name: string;
  email: string;
  company?: string;
  practiceArea?: string;
  message?: string;
  honeypot?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;

  // Handle CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const body = (await request.json()) as InquiryBody;

    // 1. Silent discard for bot submission via honeypot
    if (body.honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: corsHeaders,
      });
    }

    // 2. Validate essential fields
    if (!body.name || !body.email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required fields.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not configured in Cloudflare environment variables.');
      return new Response(
        JSON.stringify({
          error: 'Resend API key is not configured. Please add RESEND_API_KEY in Cloudflare Pages settings.',
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    const toEmail = env.CONTACT_TO_EMAIL || 'info@sensirupt.com';
    // If user has not yet verified sensirupt.com domain on Resend, Resend's free tier requires onboarding@resend.dev
    const fromEmail = env.CONTACT_FROM_EMAIL || 'Sensirupt Briefings <onboarding@resend.dev>';
    const practice = body.practiceArea || 'General Advisory Briefing';
    const company = body.company?.trim() || 'Not specified';
    const message = body.message?.trim() || 'No additional details provided.';

    // 3. Build executive HTML email template
    const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Techno-Legal Inquiry - Sensirupt</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F0F7FD; margin: 0; padding: 32px 16px; color: #141414;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid rgba(63, 95, 134, 0.15); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
    
    <!-- Top Signature Brand Stripe -->
    <tr>
      <td style="height: 6px; background: linear-gradient(90deg, #2E8BE8 0%, #C6A15B 50%, #E3A19C 100%);"></td>
    </tr>

    <!-- Header -->
    <tr>
      <td style="padding: 32px 36px 20px 36px;">
        <span style="font-size: 11px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; color: #C6A15B;">Confidential Advisory Desk</span>
        <h1 style="font-size: 24px; font-weight: 700; color: #141414; margin: 6px 0 0 0; letter-spacing: -0.02em;">New Briefing & Inquiry Request</h1>
      </td>
    </tr>

    <!-- Divider -->
    <tr>
      <td style="padding: 0 36px;">
        <div style="height: 1px; background-color: rgba(63, 95, 134, 0.12);"></div>
      </td>
    </tr>

    <!-- Details Table -->
    <tr>
      <td style="padding: 24px 36px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; line-height: 1.6;">
          <tr>
            <td width="35%" style="padding: 8px 0; color: #3F5F86; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Client Name</td>
            <td width="65%" style="padding: 8px 0; color: #141414; font-weight: 700;">${escapeHtml(body.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3F5F86; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Direct Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(body.email)}" style="color: #2E8BE8; text-decoration: none; font-weight: 600;">${escapeHtml(body.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3F5F86; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Company / Fund</td>
            <td style="padding: 8px 0; color: #141414;">${escapeHtml(company)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3F5F86; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Practice Domain</td>
            <td style="padding: 8px 0;">
              <span style="display: inline-block; background-color: #EBF3FB; color: #2E8BE8; padding: 3px 10px; border-radius: 6px; font-weight: 600; font-size: 12px; border: 1px solid rgba(46, 139, 232, 0.25);">
                ${escapeHtml(practice)}
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Message Content Box -->
    <tr>
      <td style="padding: 0 36px 28px 36px;">
        <div style="background-color: #FAF8F5; border: 1px solid rgba(63, 95, 134, 0.12); border-radius: 12px; padding: 18px 20px;">
          <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.06em; color: #3F5F86; margin-bottom: 8px;">Inquiry Brief / Scope:</div>
          <div style="font-size: 14px; line-height: 1.6; color: #141414; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 36px 28px 36px; background-color: #F8FAFC; border-top: 1px solid rgba(63, 95, 134, 0.1); font-size: 12px; color: #3F5F86; line-height: 1.5;">
        <p style="margin: 0;">This transmission was dispatched securely via <strong>Sensirupt International Portal</strong>. Confidential and privileged communication.</p>
        <p style="margin: 6px 0 0 0; font-size: 11px; color: #94A3B8;">Sensirupt Techno-Legal Advisory · 20th Floor, Galaxy Blue Sapphire Plaza, Sector 4, Noida, UP - 201309</p>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // 4. Dispatch email via Resend REST API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: body.email,
        subject: `New Techno-Legal Inquiry: ${body.name} (${company})`,
        html: htmlEmail,
      }),
    });

    const resendData = (await resendResponse.json()) as { id?: string; message?: string; error?: string };

    if (!resendResponse.ok) {
      console.error('Resend API error:', resendData);
      return new Response(
        JSON.stringify({
          error: resendData.message || resendData.error || 'Failed to dispatch email via Resend.',
        }),
        { status: resendResponse.status, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        id: resendData.id,
        message: 'Inquiry dispatched successfully.',
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error: any) {
    console.error('Error handling contact form:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error processing inquiry.' }),
      { status: 500, headers: corsHeaders }
    );
  }
};

// Handle OPTIONS preflight requests
export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
