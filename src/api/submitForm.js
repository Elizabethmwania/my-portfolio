import { info } from 'sass';

const nodemailer = require('nodemailer');

export default async (req, res) => {
  if (req.method === 'POST') {
    // return res.status(405).end();
  const { name, email, message } = req.body;
  // Create a transporter using an SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
  });

  // Send email
    const mailOptions = {
    from: email,
    to: 'mwania.m.elizabeth@gmail.com',
    subject: 'Sevice Inquiry by: '+ name,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    console.error("Error 500 "+ error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
    }else{
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true });
    }
  });
  }else {
    console.log('Received a non-POST request:', req.method);
    res.status(405).json({error: 'Method Not allowed'});
  }

}
