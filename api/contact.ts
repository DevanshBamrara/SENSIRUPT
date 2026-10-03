// Serverless Function: /api/contact (Vercel & generic Node/Edge compatibility)

interface InquiryBody {
  name: string;
  email: string;
  company?: string;
  practiceArea?: string;
  message?: string;
  honeypot?: string;
}

export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body: InquiryBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    if (body.honeypot) {
      return res.status(200).json({ success: true });
    }

    if (!body.name || !body.email) {
      return res.status(400).json({ error: 'Name and email are required fields.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'Resend API key is not configured. Please add RESEND_API_KEY to your environment variables.',
      });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@sensirupt.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Sensirupt Briefings <onboarding@resend.dev>';
    const practice = body.practiceArea || 'General Advisory Briefing';
    const company = body.company?.trim() || 'Not specified';
    const message = body.message?.trim() || 'No additional details provided.';

    const htmlEmail = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Techno-Legal Inquiry</title></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F0F7FD; margin: 0; padding: 32px 16px; color: #141414;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid rgba(63, 95, 134, 0.15);">
    <tr><td style="height: 6px; background: linear-gradient(90deg, #2E8BE8 0%, #C6A15B 50%, #E3A19C 100%);"></td></tr>
    <tr>
      <td style="padding: 32px 36px 20px 36px;">
        <span style="font-size: 11px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; color: #C6A15B;">Confidential Advisory Desk</span>
        <h1 style="font-size: 24px; font-weight: 700; color: #141414; margin: 6px 0 0 0;">New Briefing & Inquiry Request</h1>
      </td>
    </tr>
    <tr><td style="padding: 0 36px;"><div style="height: 1px; background-color: rgba(63, 95, 134, 0.12);"></div></td></tr>
    <tr>
      <td style="padding: 24px 36px;">
        <p><strong>Client Name:</strong> ${escapeHtml(body.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Practice:</strong> ${escapeHtml(practice)}</p>
        <div style="background: #FAF8F5; border: 1px solid rgba(63,95,134,0.12); padding: 16px; border-radius: 8px; margin-top: 16px;">
          <strong>Message:</strong><br/>
          ${escapeHtml(message)}
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const resendRes = await fetch('https://api.resend.com/emails', {
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

    const data = await resendRes.json();
    if (!resendRes.ok) {
      return res.status(resendRes.status).json(data);
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Server error' });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
