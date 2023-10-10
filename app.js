const express = require("express");
const app = express();
const cors = require("cors");
const { mailSender } = require("./src/util/mailSender");
const path = require("path");
// const routes = require("./src/routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/api", routes);

app.post("/api/email-send", async (req, res) => {
  try {
    const to = "mr.saikaungset.eng@gmail.com";
    const subject = "wuu shuu war";
    const text = "testing 123...";
    const htmlFilePath = path.join(__dirname, "src", "view", "index.html");

    await mailSender(to, subject, text, htmlFilePath);

    res.status(200).json({ success: 1, message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);

    res.status(500).json({ success: 0, message: "Failed to send email" });
  }
});

module.exports = app;
