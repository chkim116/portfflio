const express = require("express");
const nodeMail = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require('dotenv')

dotenv.config()
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
const authUser = process.env.MAILID;
const authPass = process.env.MAILIDPASS;

const sendEmail = (txt) => {
  let transporter = nodeMail.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'cskim132@gmail.com',
      pass: 'lldvyjffdnbzgzxo'
  }
  });

  let mailOptions = {
    from: 'cskim132@gmail.com',
    to: 'cskim132@gmail.com',
    subject: "포트폴리오 사이트에서 온 전문입니다.",
    html: `${txt.username}님이 보내신 글 <br> phone : ${txt.tel} <br> email : ${txt.email} <br> ${txt.message} <br>`,
  };

  // 전송

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log("Finish sending email : " + info.response);
    transporter.close();
  });
};

app.get("/", (req, res) => {
  res.send("hello I'm Server from Express");
});

app.post("/mail", async (req, res) => {
  const { username, tel, email, message  } = req.body;
  const txt = {username, tel, email, message}
  try {
    await sendEmail(txt);
    res.status(200).send("right");
  } catch (err) {
    res.status(400).send("wrong");
  }
});

app.listen(4000, console.log("SERVER OPEN", "http://localhost:4000/"));
