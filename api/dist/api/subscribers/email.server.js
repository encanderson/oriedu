"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _config = require("../../config");

var _logs = _interopRequireDefault(require("../../logs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createTransporter = async mailOptions => {
  const settingsEmail = await (0, _config.createEmailSettings)();

  const transporter = _nodemailer.default.createTransport(settingsEmail);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      _logs.default.error(error);
    } else {
      if (process.env.NODE_ENV !== "production") {
        _logs.default.info("URL: " + _nodemailer.default.getTestMessageUrl(info));
      }
    }
  });
};

const sendEmail = async (email, subject, html) => {
  const mailOptions = {
    from: _config.config.emailUser,
    to: email,
    subject: subject,
    html: html
  };
  await createTransporter(mailOptions);
};

exports.sendEmail = sendEmail;