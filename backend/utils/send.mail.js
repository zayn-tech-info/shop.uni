const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAIL_HOST,
    port: Number(process.env.NODEMAIL_PORT),
    auth: {
      user: process.env.NODEMAIL_USERNAME,
      pass: process.env.NODEMAIL_PASS,
    },
  });

  const emailOptions = {
    from: "shop.uni",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    console.log("Sending email with options:", emailOptions);
    await transporter.sendMail(emailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error); // <--- Add this line
    throw error; // rethrow so your controller can handle it
  }
};

module.exports = sendMail;
