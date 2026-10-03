export interface InquiryPayload {
  name: string;
  email: string;
  company?: string;
  practiceArea?: string;
  message?: string;
  honeypot?: string;
}

export interface InquiryResult {
  success: boolean;
  error?: string;
}

export async function sendInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'Failed to dispatch inquiry. Please try again.');
    }

    return { success: true };
  } catch (err: any) {
    console.error('Inquiry submission error:', err);
    return {
      success: false,
      error: err.message || 'Unable to connect to the inquiry desk. Please email info@sensirupt.com directly.',
    };
  }
}
