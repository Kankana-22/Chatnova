// import nodemailer from "nodemailer";

// export const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });


//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   });
// };
import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  console.log("Trying to send email to:", options.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });


  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: options.email,
    subject: options.subject,
    text: options.message,
  });


  console.log("Email sent successfully:");
  console.log(info.response);
};