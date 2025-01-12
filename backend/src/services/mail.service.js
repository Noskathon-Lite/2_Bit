const nodemailer = require("nodemailer");
require("dotenv").config();

class mailservice {
  #transport; //private key,only used in this class
  constructor() {
    try {
      this.#transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        // service:"gmail",
        secure: false, // true for port 465, false for other ports
        // secure =>comment out for gmail
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });
      if (process.env.SMTP_SERVICE === "gmail") {
        config["service"] = "gmail";
      }
      console.log(process.env.SMTP_PROVIDER);
    } catch (exception) {
      console.log(exception);
      console.log("error connecting mail server...");
    }
  }

  sendmail = async ({ to, sub, message, attachment = null }) => {
    try {
      const msgoptions = {
        to: to,

        from: process.env.SMTP_FROM,
        subject: sub,
        html: message,
      };
      if (attachment) {
        msgoptions[attachment] = attachment;
      }
      const response = await this.#transport.sendMail(msgoptions);
      console.log("Email sent successfully ");
      return response;
    } catch (exception) {
      console.log("eror sending mail...");
      console.log(exception);
      throw {
        status: 500,
        message: "error sending mail.",
        details: exception,
      };
    }
  };
}
const mailsvc = new mailservice();
module.exports = mailsvc;
