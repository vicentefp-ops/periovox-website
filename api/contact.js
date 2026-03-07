const EMAIL_ENDPOINT = 'https://api.resend.com/emails'
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@periovox.ai'
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'PerioVoxAI Website <onboarding@resend.dev>'

function json(res, statusCode, body) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function sendEmail({ name, email, clinic, message, language, timestamp }) {
  const subject = `New PerioVoxAI website inquiry from ${name}`
  const clinicLine = clinic ? clinic : 'Not provided'
  const text = [
    'New website inquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Clinic/Organization: ${clinicLine}`,
    `Language: ${language || 'unknown'}`,
    `Timestamp: ${timestamp}`,
    '',
    'Message:',
    message,
  ].join('\n')

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
      <h2 style="margin-bottom:16px">New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Clinic/Organization:</strong> ${escapeHtml(clinicLine)}</p>
      <p><strong>Language:</strong> ${escapeHtml(language || 'unknown')}</p>
      <p><strong>Timestamp:</strong> ${escapeHtml(timestamp)}</p>
      <p style="margin-top:20px"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `

  const response = await fetch(EMAIL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(body || 'Unable to send email')
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return json(res, 405, { error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return json(res, 500, { error: 'Server email configuration is missing' })
  }

  const payload = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  const { name, email, clinic = '', message, website = '', language = 'unknown' } = payload

  if (website) {
    return json(res, 200, { ok: true })
  }

  if (!name || !email || !message) {
    return json(res, 400, { error: 'Missing required fields' })
  }

  if (!validateEmail(email)) {
    return json(res, 400, { error: 'Invalid email address' })
  }

  if (String(name).length > 160 || String(clinic).length > 200 || String(message).length > 5000) {
    return json(res, 400, { error: 'Input too long' })
  }

  const timestamp = new Date().toISOString()

  try {
    await sendEmail({
      name: String(name).trim(),
      email: String(email).trim(),
      clinic: String(clinic).trim(),
      message: String(message).trim(),
      language: String(language).trim(),
      timestamp,
    })

    return json(res, 200, { ok: true })
  } catch (error) {
    return json(res, 502, { error: 'Unable to deliver the message' })
  }
}
