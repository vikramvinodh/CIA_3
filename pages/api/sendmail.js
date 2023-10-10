import nodemailer from 'nodemailer';

export default async (req, res) => {
  // const { name, phone, email } = req.body.mailstate;
  console.log(req.body.mailstate)
  const data = req.body.mailstate;

  const { name, email, phone, message } = data;

  //   // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  let mailOptions = {
    from: `${email}`,
    to: 'kalpananarayan2803@gmail.com',
    subject: `New Lead Captured`,
    html: `
          <div style="font-family: Arial, sans-serif;  background-color: #203864; color:#fff; box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);">
    <div style="background-color: #CFDCFD; color: #203864; padding: 20px; text-align: start;">
      <h1 style="font-size: 28px;">Lead Captured!</h1>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px; color:#fff">This is an automated email to let you know that a new lead has been captured through our website. Here are the details:</p>
      <table style="border-collapse: collapse; width: 30%;">
        <tr style="background-color: #CFDCFD;">
          <td style="padding: 10px; font-size: 16px; font-weight: bold; border: 1px solid #203864; color:#203864">Name:</td>
          <td style="padding: 10px; font-size: 16px; border: 1px solid #203864; color:#203864">${name}</td>
        </tr>
        <tr style="background-color: #CFDCFD;">
          <td style="padding: 10px; font-size: 16px; font-weight: bold; border: 1px solid #203864; color:#203864">Contact:</td>
          <td style="padding: 10px; font-size: 16px; border: 1px solid #203864; color:#203864">${phone}</td>
        </tr>
        <tr style="background-color: #CFDCFD;">
          <td style="padding: 10px; font-size: 16px; font-weight: bold; border: 1px solid #203864; color:#203864">Email:</td>
          <td style="padding: 10px; font-size: 16px; border: 1px solid #203864; color:#203864">${email}</td>
        </tr>
        <tr style="background-color: #CFDCFD;">
        <td style="padding: 10px; font-size: 16px; font-weight: bold; border: 1px solid #203864; color:#203864">Email:</td>
        <td style="padding: 10px; font-size: 16px; border: 1px solid #203864; color:#203864">${message}</td>
      </tr>
      </table>
      <p style="font-size: 16px; margin-top: 30px;">Thank you</p>
      <p style="font-size: 16px; margin-top: 30px;">Lead received on Date:${new Date().toLocaleString()}</p>

    </div>
    <div style="background-color: #f2f2f2; color: #333; font-size: 14px; padding: 10px; text-align: center;">
      <p style="margin: 0;">You are receiving this email because you contacted us through our website.Please take the appropriate action to follow up with this lead.</p>
    </div>
  </div>
  `
  };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
};
