const nodemailer = require("nodemailer");

const config = {
  smtp_host: "lgekrhqmh01.lge.com",
  smtp_user: "woodong.kim@lge.com",
  smtp_pass: "",
};

const transporter = nodemailer.createTransport({
  host: config.smtp_host,
  port: 25,
  secure: false,
  auth: {
    user: config.smtp_user,
    pass: config.smtp_pass,
  },
});

const sender = "woodong.kim@lge.com";
const receivers = ["woochan.lim@lge.com"];
const carbonCopys = ["hyeonwoo930.kim@lge.com"];
const subject = "test mail";
const mailHtml = `<p>
안녕하세요.

</p>`;

const mailOptions = {
  from: sender,
  to: receivers,
  // cc: carbonCopys,
  subject: subject,
  // text:mail_text,
  html: mailHtml,
  // attachments: attachments_list,
};

async function sendMail() {
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      ret = false;

      console.log(err);
    } else {
      console.log(res);
    }

    fs.unlink(img_path, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
}
/* const reservedTime = 1666748100000;
setTimeout(sendMail, reservedTime - Date.now());
*/

const schedule = require("node-schedule");

// const date = new Date();

// set time zone
/*
const rule = new schedule.RecurrenceRule();
rule.tz = "Asia/Seoul";

*/
const date = new Date(2022, 9, 26, 10, 59, 1);
const job = schedule.scheduleJob(date, () => {
  console.log("scheduler");
  sendMail();
});
