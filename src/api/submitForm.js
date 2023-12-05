const nodemailer = require('nodemailer');

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  // Validate form data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  // Create a transporter using an SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mwania.m.elizabeth@gmail.com',
        pass: 'Elizabeth@257',
    },
  });

  // Send email
  await transporter.sendMail({
    from: email,
    to: 'mwania.m.elizabeth@gmail.com',
    subject: 'Sevice Inquiry by: '+ name,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  res.status(200).json({ success: true });
};
