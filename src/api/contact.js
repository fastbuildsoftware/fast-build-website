const DEFAULT_ENDPOINT = 'https://formsubmit.co/ajax/software@fastbuildinc.com';

export async function submitContactForm(form) {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || DEFAULT_ENDPOINT;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: `New Contact Request: ${form.name} - ${form.projectType || 'General Inquiry'}`,
      _template: 'table',
      _captcha: 'false',
      name: form.name,
      email: form.email,
      phone: form.phone || 'Not provided',
      projectType: form.projectType || 'Not specified',
      message: form.message,
      smsConsent: form.smsConsent
        ? 'Yes - Consented to receive SMS/WhatsApp messages'
        : 'No',
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Failed to send your message. Please try again.');
  }

  return data;
}
