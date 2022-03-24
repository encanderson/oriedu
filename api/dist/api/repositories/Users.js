"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;

var _database = require("../database");

var _utils = require("../../utils");

var _errors = require("../errors");

class Users {
  constructor(user) {
    this.date = (0, _utils.createdAt)();
    this.user = user;
  }

  static async searchUser(newUser) {
    const user = await _database.prisma.user.findUnique({
      where: {
        userId: (0, _utils.hashFunction)(newUser.cpf)
      },
      select: {
        app: true
      }
    });
    const email = await _database.prisma.user.findUnique({
      where: {
        email: newUser.email
      },
      select: {
        app: true
      }
    });

    if (user || email) {
      throw new _errors.UserExist();
    }

    return new Users(newUser);
  }

  async createUser(code) {
    const password = await (0, _utils.hashPassword)(this.user.password);
    await _database.prisma.user.create({
      data: {
        active: false,
        app: this.user.app,
        job: this.user.job,
        userId: (0, _utils.hashFunction)(this.user.cpf),
        email: this.user.email,
        code: code,
        password: password,
        createdAt: this.date,
        updatedAt: this.date,
        consents: this.user.consents,
        profile: {
          create: {
            name: this.user.name
          }
        }
      }
    });
  }

  static async confirmUser(userId) {
    try {
      await _database.prisma.user.update({
        where: {
          userId: userId
        },
        data: {
          active: true
        }
      });
    } catch (err) {
      throw new _errors.Forbidden();
    }
  }

}

exports.Users = Users;