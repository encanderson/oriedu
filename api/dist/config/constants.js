"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userForm = exports.schoolForm = exports.profileUpdate = exports.formatsAccepts = exports.employeeForm = void 0;
const formatsAccepts = ["application/json", "*/*", undefined];
exports.formatsAccepts = formatsAccepts;
const profileUpdate = ["job", "picture"];
exports.profileUpdate = profileUpdate;
const userForm = ["app", "cpf", "email", "name"];
exports.userForm = userForm;
const schoolForm = ["cnpj", "fantasia", "email", "phone"];
exports.schoolForm = schoolForm;
const employeeForm = ["name", "job", "address", "birthday", "contacts", "hired", "docs", "ethnic", "gender", "salary", "bank"];
exports.employeeForm = employeeForm;