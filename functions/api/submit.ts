// functions/api/submit.ts (Cloudflare Pages Worker)
// Dual-dispatch transactional email pipeline using Resend API

interface Env {
  RESEND_API_KEY?: string;
  FIRM_EMAIL?: string;
  SEND_FROM?: string;
}

interface InquiryBody {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  practiceArea?: string;
  message?: string;
  website?: string; // Honeypot trap
}

const DEFAULT_FIRM_EMAIL = 'info@sensirupt.com';
const DEFAULT_SEND_FROM = 'Sensirupt Advisory <briefings@mail.sensirupt.com>';
const PRIMARY_ORIGIN = 'https://sensirupt.com';

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true;
  if (
    origin === PRIMARY_ORIGIN ||
    origin === 'https://www.sensirupt.com' ||
    origin.endsWith('.sensirupt.com') ||
    origin.endsWith('.pages.dev')
  ) {
    return true;
  }
  if (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
    return true;
  }
  return false;
}

export async function onRequestOptions(context: { request: Request }) {
  const { request } = context;
  const origin = request.headers.get('Origin');

  if (!isAllowedOrigin(origin)) return new Response(null, { status: 403 });

  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin || PRIMARY_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;
  const origin = request.headers.get('Origin');

  if (!isAllowedOrigin(origin)) {
    return new Response(JSON.stringify({ error: 'Forbidden origin' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const corsHeaders = {
    'Content-Type': 'application/json',
    ...(origin ? { 'Access-Control-Allow-Origin': origin } : {}),
  };

  let body: InquiryBody;
  try {
    body = (await request.json()) as InquiryBody;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON request payload' }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  const {
    name = '',
    email = '',
    phone = '',
    company = '',
    practiceArea = 'General Techno-Legal Briefing',
    message = '',
    website = '', // Honeypot trap
  } = body;

  // Bot Trap: Silently return 200 OK without spending Resend credits or alerting the team
  if (website && website.trim() !== '') {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (!name.trim() || !email.trim()) {
    return new Response(
      JSON.stringify({ error: 'Full name and email address are required.' }),
      { status: 400, headers: corsHeaders }
    );
  }

  if (!isValidEmail(email.trim())) {
    return new Response(JSON.stringify({ error: 'Invalid email address format.' }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Missing RESEND_API_KEY on server environment.');
    return new Response(
      JSON.stringify({
        error: 'Email service configuration missing. Please add RESEND_API_KEY to environment variables.',
      }),
      { status: 500, headers: corsHeaders }
    );
  }

  const firmEmail = env.FIRM_EMAIL || DEFAULT_FIRM_EMAIL;
  const sendFrom = env.SEND_FROM || DEFAULT_SEND_FROM;

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safePhone = escapeHtml(phone.trim());
  const safeCompany = escapeHtml(company.trim() || 'Not specified');
  const safePractice = escapeHtml(practiceArea.trim() || 'General Advisory');
  const safeMessage = escapeHtml(message.trim() || 'No narrative provided.').replace(/\n/g, '<br>');
  const refCode = `SR-${Math.floor(100000 + Math.random() * 900000)}`;

  // Email 1: Internal Team Lead Notification HTML (Obsidian / Slate Executive Style)
  const notifyHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Client Inquiry</title></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F0F7FD; margin: 0; padding: 32px 16px; color: #141414;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid rgba(63, 95, 134, 0.15); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
    
    <!-- Top Signature Brand Stripe -->
    <tr>
      <td style="height: 6px; background: linear-gradient(90deg, #2E8BE8 0%, #C6A15B 50%, #E3A19C 100%);"></td>
    </tr>

    <!-- Header -->
    <tr>
      <td style="padding: 32px 36px 20px 36px;">
        <span style="font-size: 11px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; color: #C6A15B;">Confidential Advisory Lead · Ref #${refCode}</span>
        <h1 style="font-size: 24px; font-weight: 700; color: #141414; margin: 6px 0 0 0; letter-spacing: -0.02em;">New Briefing & Inquiry Request</h1>
      </td>
    </tr>

    <!-- Divider -->
    <tr>
      <td style="padding: 0 36px;"><div style="height: 1px; background-color: rgba(63, 95, 134, 0.12);"></div></td>
    </tr>

    <!-- Prospect Details -->
    <tr>
      <td style="padding: 24px 36px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; line-height: 1.6;">
          <tr>
            <td width="35%" style="padding: 8px 0; color: #3F5F86; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Prospect Name</td>
            <td width="65%" style="padding: 8px 0; color: #141414; font-weight: 700;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3F5F86; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Direct Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #2E8BE8; text-decoration: none; font-weight: 600;">${safeEmail}</a></td>
          </tr>
          ${safePhone ? `
          <tr>
            <td style="padding: 8px 0; color: #3F5F86; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Phone / WhatsApp</td>
            <td style="padding: 8px 0; color: #141414; font-weight: 600;">${safePhone}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 0; color: #3F5F86; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Company / Fund</td>
            <td style="padding: 8px 0; color: #141414;">${safeCompany}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3F5F86; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Advisory Domain</td>
            <td style="padding: 8px 0;">
              <span style="display: inline-block; background-color: #EBF3FB; color: #2E8BE8; padding: 4px 12px; border-radius: 6px; font-weight: 600; font-size: 12px; border: 1px solid rgba(46, 139, 232, 0.25);">
                ${safePractice}
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Narrative / Message Box -->
    <tr>
      <td style="padding: 0 36px 28px 36px;">
        <div style="background-color: #FAF8F5; border: 1px solid rgba(63, 95, 134, 0.12); border-radius: 12px; padding: 18px 20px;">
          <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.06em; color: #3F5F86; margin-bottom: 8px;">Inquiry Brief / Scope:</div>
          <div style="font-size: 14px; line-height: 1.6; color: #141414; white-space: normal;">${safeMessage}</div>
        </div>
      </td>
    </tr>

    <!-- Quick Action Bar -->
    <tr>
      <td style="padding: 0 36px 28px 36px;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <a href="mailto:${safeEmail}?subject=Re:%20Sensirupt%20Briefing%20Inquiry%20[%23${refCode}]" style="display: inline-block; background-color: #141414; color: #FFFFFF; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; text-decoration: none; padding: 12px 22px; border-radius: 50px;">Reply to Client &rarr;</a>
            </td>
            ${safePhone ? `
            <td style="padding-left: 12px;">
              <a href="https://wa.me/${safePhone.replace(/[^0-9]/g, '')}" target="_blank" style="display: inline-block; background-color: #25D366; color: #FFFFFF; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; text-decoration: none; padding: 12px 20px; border-radius: 50px;">Chat on WhatsApp</a>
            </td>` : ''}
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 36px 28px 36px; background-color: #F8FAFC; border-top: 1px solid rgba(63, 95, 134, 0.1); font-size: 12px; color: #3F5F86; line-height: 1.5;">
        <p style="margin: 0;">Dispatched securely via <strong>Sensirupt International Portal</strong>. Confidential & Privileged.</p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  // Email 2: Client Auto-Confirmation HTML (Editorial Ivory Letterhead)
  const confirmHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Inquiry Received - Sensirupt</title></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F0F7FD; margin: 0; padding: 32px 16px; color: #141414;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid rgba(63, 95, 134, 0.15); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
    
    <!-- Top Signature Brand Stripe -->
    <tr>
      <td style="height: 6px; background: linear-gradient(90deg, #2E8BE8 0%, #C6A15B 50%, #E3A19C 100%);"></td>
    </tr>

    <!-- Header -->
    <tr>
      <td style="padding: 32px 36px 20px 36px;">
        <div style="font-size: 20px; font-weight: 900; letter-spacing: -0.03em; color: #141414; margin-bottom: 12px;">SENSIRUPT</div>
        <span style="font-size: 11px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; color: #C6A15B;">Confidential Briefing Receipt · Ref #${refCode}</span>
        <h1 style="font-size: 24px; font-weight: 700; color: #141414; margin: 6px 0 0 0; letter-spacing: -0.02em;">We Have Received Your Inquiry</h1>
      </td>
    </tr>

    <!-- Divider -->
    <tr>
      <td style="padding: 0 36px;"><div style="height: 1px; background-color: rgba(63, 95, 134, 0.12);"></div></td>
    </tr>

    <!-- Body Copy -->
    <tr>
      <td style="padding: 24px 36px; font-size: 15px; line-height: 1.7; color: #334155;">
        <p style="margin-top: 0;">Dear ${safeName},</p>
        <p>Thank you for reaching out to <strong>Sensirupt</strong>. Your briefing inquiry has been securely routed to our senior techno-legal partners.</p>
        <p>All inquiries undergo strict internal conflict-checking against existing portfolio matters and are handled under strict confidentiality covenants.</p>
        
        <!-- Snapshot of Submitted Scope -->
        <div style="background-color: #FAF8F5; border-left: 3px solid #C6A15B; padding: 14px 18px; border-radius: 4px; margin: 20px 0; font-size: 14px;">
          <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #3F5F86; margin-bottom: 4px;">Requested Advisory Scope:</div>
          <div style="color: #141414; font-weight: 600;">${safePractice}</div>
          ${company.trim() ? `<div style="color: #64748B; font-size: 13px; margin-top: 2px;">Organization: ${safeCompany}</div>` : ''}
        </div>

        <p><strong>What to expect next:</strong></p>
        <ol style="padding-left: 20px; margin: 12px 0; color: #475569;">
          <li style="margin-bottom: 8px;"><strong>Conflict Screening:</strong> We verify independence across relevant technology and asset classes.</li>
          <li style="margin-bottom: 8px;"><strong>Senior Assessment:</strong> An advisory director with deep US multinational and deep-tech experience reviews your technical brief.</li>
          <li><strong>Direct Response:</strong> You will receive a confidential briefing slot confirmation within 4 business hours.</li>
        </ol>

        <p style="margin-bottom: 0;">If your transaction or diligence timeline is time-critical, you may also message our desk directly on WhatsApp:</p>
      </td>
    </tr>

    <!-- WhatsApp Escalation Button -->
    <tr>
      <td style="padding: 0 36px 28px 36px;">
        <a href="https://wa.me/917827963285?text=${encodeURIComponent(`Hello Sensirupt Team, following up on inquiry ref #${refCode} (${safeName}).`)}" target="_blank" style="display: inline-block; background-color: #25D366; color: #FFFFFF; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; text-decoration: none; padding: 12px 22px; border-radius: 50px;">
          Connect on WhatsApp (+91 78279 63285) &rarr;
        </a>
      </td>
    </tr>

    <!-- Signature & Office Info -->
    <tr>
      <td style="padding: 20px 36px 28px 36px; background-color: #F8FAFC; border-top: 1px solid rgba(63, 95, 134, 0.1); font-size: 12px; color: #3F5F86; line-height: 1.6;">
        <p style="margin: 0; font-weight: 600; color: #141414;">Sensirupt Advisory Desk</p>
        <p style="margin: 2px 0 0 0; color: #64748B;">Boutique Techno-Legal & Intellectual Property Strategy</p>
        <p style="margin: 6px 0 0 0; font-size: 11px; color: #94A3B8;">20th Floor, Galaxy Blue Sapphire Plaza, Sector 4, Noida, UP - 201309 · Direct: <a href="mailto:info@sensirupt.com" style="color: #2E8BE8; text-decoration: none;">info@sensirupt.com</a></p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    // Parallel Dual-Dispatch to Resend API
    const [notifyRes, confirmRes] = await Promise.all([
      // 1. Team Notification
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: sendFrom,
          to: [firmEmail],
          reply_to: email.trim(),
          subject: `New Techno-Legal Inquiry: ${name.trim()}${company.trim() ? ` (${company.trim()})` : ''} [${refCode}]`,
          html: notifyHtml,
        }),
      }),
      // 2. Client Auto-Confirmation
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: sendFrom,
          to: [email.trim()],
          reply_to: firmEmail, // Replies from client go directly to info@sensirupt.com!
          subject: `We have received your briefing request — Sensirupt Advisory [#${refCode}]`,
          html: confirmHtml,
        }),
      }),
    ]);

    if (!notifyRes.ok || !confirmRes.ok) {
      const notifyErr = notifyRes.ok ? '' : await notifyRes.text();
      const confirmErr = confirmRes.ok ? '' : await confirmRes.text();
      console.error('Resend API Dispatch Error:', { notifyErr, confirmErr });

      return new Response(
        JSON.stringify({
          error: `Resend API Error: ${notifyErr || confirmErr || 'Failed to dispatch email.'}`,
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        ref: refCode,
        message: 'Inquiry received and confirmation email dispatched.',
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error('Server error handling submission:', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error delivering inquiry.' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
