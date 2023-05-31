const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { asunto, texto, html } = req.body;
  try {

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: process.env.NEXT_PUBLIC_SMTP_PORT,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAILADRESS,
        pass: process.env.NEXT_PUBLIC_EMAILPASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAILADRESS,
      to: process.env.NEXT_PUBLIC_EMAIL_SENDADRESS,
      subject: asunto,
      text: texto,
      html: html,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ message: 'Error sending email' });
      } else {
        res.status(200).json({ message: 'Email sent successfully' });
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
};

export default sendEmail;
