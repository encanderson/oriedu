"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEmailSettings = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const settingsEmailProduction = {
  host: _.config.emailServer,
  port: 465,
  secure: true,
  auth: {
    user: _.config.emailUser,
    pass: _.config.emailPass
  }
};

const settingsEmailDevelopment = testAccount => ({
  host: "smtp.ethereal.email",
  auth: testAccount
});

const createEmailSettings = async () => {
  if (process.env.NODE_ENV === "production") {
    return settingsEmailProduction;
  } else {
    const testAccount = await _nodemailer.default.createTestAccount();
    return settingsEmailDevelopment(testAccount);
  }
};

exports.createEmailSettings = createEmailSettings;