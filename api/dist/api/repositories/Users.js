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
    this.user_id = (0, _utils.hashFunction)(user.cpf);
  }

  static async searchUser(newUser) {
    const user = await _database.prisma.user.findUnique({
      where: {
        user_id: (0, _utils.hashFunction)(newUser.cpf)
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
      throw new _errors.UserExist("Usuário já registrado.");
    }

    return new Users(newUser);
  }

  async create() {
    await _database.prisma.user.create({
      data: {
        active: false,
        app: this.user.app,
        user_id: this.user_id,
        email: this.user.email,
        created_at: this.date,
        updated_at: this.date,
        consents: {}
      }
    });
  }

  static async confirmUser(user_id) {
    try {
      await _database.prisma.user.update({
        where: {
          user_id: user_id
        },
        data: {
          active: true
        }
      });
    } catch (err) {
      throw new _errors.Forbidden();
    }
  }

  static async getUser(user_id) {
    var _profile$school, _profile$school2, _profile$school3, _profile$school4, _profile$school5;

    const user = await _database.prisma.user.findUnique({
      where: {
        user_id: user_id
      },
      select: {
        id: true,
        app: true,
        user_id: true,
        email: true,
        password: true
      }
    });
    const profile = await _database.prisma.employee.findUnique({
      where: {
        user_id: user_id
      },
      select: {
        job: true,
        picture: true,
        name: true,
        school: {
          select: {
            id: true,
            address: true,
            contacts: true,
            cnpj: true,
            fantasia: true,
            modalities: true,
            register: true,
            new: true
          }
        }
      }
    });
    const name = profile.name.split(" ");
    const data = { ...user,
      name: name[0] + " " + name[name.length - 1],
      job: profile.job,
      picture: profile.picture,
      school_id: profile.school.id,
      address: (_profile$school = profile.school) === null || _profile$school === void 0 ? void 0 : _profile$school.address,
      contacts: (_profile$school2 = profile.school) === null || _profile$school2 === void 0 ? void 0 : _profile$school2.contacts,
      modalities: profile === null || profile === void 0 ? void 0 : profile.school.modalities,
      register: profile === null || profile === void 0 ? void 0 : profile.school.register,
      new: profile === null || profile === void 0 ? void 0 : (_profile$school3 = profile.school) === null || _profile$school3 === void 0 ? void 0 : _profile$school3.new,
      school: {
        cnpj: (_profile$school4 = profile.school) === null || _profile$school4 === void 0 ? void 0 : _profile$school4.cnpj,
        fantasia: (_profile$school5 = profile.school) === null || _profile$school5 === void 0 ? void 0 : _profile$school5.fantasia
      }
    };
    return data;
  }

  static async update(user_id, data) {
    await _database.prisma.employee.update({
      where: {
        user_id: user_id
      },
      data: data
    });
  }

  static async updatePassword(user_id, password) {
    await _database.prisma.user.update({
      where: {
        user_id: user_id
      },
      data: {
        password: password,
        updated_at: (0, _utils.createdAt)()
      }
    });
  }

}

exports.Users = Users;