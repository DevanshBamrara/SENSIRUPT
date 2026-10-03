export interface InquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  practiceArea?: string;
  message?: string;
  website?: string; // Honeypot field (must stay empty)
}

export interface InquiryResult {
  success: boolean;
  ref?: string;
  error?: string;
}

export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        phone: payload.phone || '',
        company: payload.company || '',
        practiceArea: payload.practiceArea || '',
        message: payload.message || '',
        website: payload.website || '',
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'Failed to dispatch inquiry. Please try again.');
    }

    return { success: true, ref: data.ref };
  } catch (err: any) {
    console.error('Inquiry submission error:', err);
    return {
      success: false,
      error: err.message || 'Unable to connect to the inquiry desk. Please email info@sensirupt.com directly.',
    };
  }
}

export const sendInquiry = submitInquiry;
