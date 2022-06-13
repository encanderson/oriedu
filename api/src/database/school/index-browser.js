
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.0.2
 * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
 */
Prisma.prismaVersion = {
  client: "3.0.2",
  engine: "2452cc6313d52b8b9a96999ac0e974d0aedf88db"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.SchoolScalarFieldEnum = makeEnum({
  id: 'id',
  cnpj: 'cnpj',
  register: 'register',
  fantasia: 'fantasia',
  logo: 'logo',
  contacts: 'contacts',
  address: 'address',
  modalities: 'modalities',
  new: 'new'
});

exports.Prisma.EmployeeScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  birthday: 'birthday',
  gender: 'gender',
  ethnic: 'ethnic',
  docs: 'docs',
  job: 'job',
  contacts: 'contacts',
  address: 'address',
  contract: 'contract',
  qualifications: 'qualifications',
  salary: 'salary',
  bank: 'bank',
  school_id: 'school_id'
});

exports.Prisma.ClassScalarFieldEnum = makeEnum({
  id: 'id',
  modality: 'modality',
  class: 'class',
  shift: 'shift',
  subjects: 'subjects',
  school_id: 'school_id'
});

exports.Prisma.TeacherScalarFieldEnum = makeEnum({
  id: 'id',
  employee_id: 'employee_id',
  classes: 'classes'
});

exports.Prisma.StudentScalarFieldEnum = makeEnum({
  id: 'id',
  number: 'number',
  name: 'name',
  birthday: 'birthday',
  gender: 'gender',
  ethnic: 'ethnic',
  birthplace: 'birthplace',
  docs: 'docs',
  emergency: 'emergency',
  go_home_alone: 'go_home_alone',
  parents: 'parents',
  social_program: 'social_program',
  fee: 'fee',
  defaulting: 'defaulting',
  history: 'history',
  school_id: 'school_id',
  class_id: 'class_id'
});

exports.Prisma.AdminScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  password: 'password'
});

exports.Prisma.QuestionsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  subject: 'subject',
  email: 'email',
  school_id: 'school_id',
  message: 'message'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull'
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: 'JsonNull'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});


exports.Prisma.ModelName = makeEnum({
  School: 'School',
  Employee: 'Employee',
  Class: 'Class',
  Teacher: 'Teacher',
  Student: 'Student',
  Admin: 'Admin',
  Questions: 'Questions'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
