const nodemailer = require("nodemailer");
const fs = require("fs").promises;
const path = require("path");

exports.mailSender = async (to, subject, text, htmlFilePath) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testing1237722@gmail.com",
      pass: "wxyq rssy bguh hjtw",
    },
  });

  const htmlContent = await fs.readFile(htmlFilePath, "utf-8");

  const mailOptions = {
    from: "testing1237722@gmail.com",
    to: to,
    subject: subject,
    text: text,
    html: htmlContent,
    attachments: [
      { 
        filename: "doelay.jpg",
        path: path.join(__dirname, "../../public/images/doelay.jpg"),
        cid: "doelay",
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Failed Email sent : " + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
