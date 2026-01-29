const nodemailer = require("nodemailer");

// 1. Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "vishwakarmakashyap@gmail.com",
    pass: "your-app-password"
  }
});

// 2. Data you want to send
const name = "John Doe";
const description = "This is a test email sent from Node.js using SMTP.";

// 3. Email options
const mailOptions = {
  from: '"V-Infotec" <vishwakarmakashyap@gmail.com>',
  to: "vishwakarmakashyap@gmail.com",
  subject: "New Information Received",
  text: `Name: ${name}\nDescription: ${description}`,
  html: `
<h2>New Information</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Description:</strong> ${description}</p>
  `
};

// 4. Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});