"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;

var _database = require("../database");

var _utils = require("../../utils");

var _errors = require("../../errors");

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
        userId: (0, _utils.hashFunction)(this.user.cpf),
        email: this.user.email,
        code: code,
        password: password,
        createdAt: this.date,
        updatedAt: this.date,
        consents: this.user.consents
      }
    });
    await _database.prisma.profile.create({
      data: {
        userId: (0, _utils.hashFunction)(this.user.cpf),
        name: this.user.name,
        job: this.user.job
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

  static async getUser(userId) {
    var _profile$school, _profile$school2, _profile$school3, _profile$school4;

    const user = await _database.prisma.user.findUnique({
      where: {
        userId: userId
      },
      select: {
        id: true,
        app: true,
        userId: true,
        email: true,
        password: true
      }
    });
    const profile = await _database.prisma.profile.findUnique({
      where: {
        userId: userId
      },
      select: {
        name: true,
        job: true,
        picture: true,
        school: {
          select: {
            contacts: true,
            address: true,
            cnpj: true,
            fantasia: true
          }
        }
      }
    });
    const data = { ...user,
      name: profile.name,
      job: profile.job,
      picture: profile.picture,
      address: (_profile$school = profile.school) === null || _profile$school === void 0 ? void 0 : _profile$school.address,
      contacts: (_profile$school2 = profile.school) === null || _profile$school2 === void 0 ? void 0 : _profile$school2.contacts,
      school: {
        cnpj: (_profile$school3 = profile.school) === null || _profile$school3 === void 0 ? void 0 : _profile$school3.cnpj,
        fantasia: (_profile$school4 = profile.school) === null || _profile$school4 === void 0 ? void 0 : _profile$school4.fantasia
      }
    };
    return data;
  }

  static async update(userId, data) {
    await _database.prisma.profile.update({
      where: {
        userId: userId
      },
      data: data
    });
  }

  static async updatePassword(userId, password) {
    await _database.prisma.user.update({
      where: {
        userId: userId
      },
      data: {
        password: password,
        updatedAt: (0, _utils.createdAt)()
      }
    });
  }

}

exports.Users = Users;