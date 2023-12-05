const nodemailer = require('nodemailer');

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, message } = req.body;

  // Validate form data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  // Create a transporter using an SMTP transport
  const transporter = nodemailer.createTransport({
    // your email configuration, like service, auth, etc.
  });

  // Send email
  await transporter.sendMail({
    from: 'elizabethmwania257@gmail.com',
    to: 'mwania.m.elizabeth@gmail.com',
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  res.status(200).json({ success: true });
};
