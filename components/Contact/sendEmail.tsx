import nodemailer from 'nodemailer';

async function sendEmail(texto: string, asunto: string): Promise<void> {
  try {
    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAILADRESS,
        pass: process.env.NEXT_PUBLIC_EMAILPASSWORD,
      },
    });

    // Configure the email content
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAILADRESS,
      to: process.env.NEXT_PUBLIC_EMAIL_SENDADRESS,
      subject: asunto,
      text: texto,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    //alert('Correo enviado:' + info.messageId);
  } catch (error) {
    //alert('Error al enviar el correo:' + error);
  }
}

export default sendEmail;
