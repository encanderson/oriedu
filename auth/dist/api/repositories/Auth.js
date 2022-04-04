"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthRepository = void 0;

var _database = require("../../database");

var _utils = require("../../utils");

class AuthRepository {
  static async verifyUser(userId) {
    const user = await _database.prisma.user.findUnique({
      where: {
        userId: userId
      },
      select: {
        id: true,
        userId: true,
        active: true,
        email: true,
        password: true,
        app: true,
        code: true
      }
    });
    await (0, _utils.isUser)(user);
    return user;
  }

  static async update(userId, data) {
    if (data.password) {
      const password = await (0, _utils.hashPassword)(data.password);
      await _database.prisma.user.update({
        where: {
          userId: userId
        },
        data: {
          password: password,
          updatedAt: (0, _utils.createdAt)()
        }
      });
    } else {
      await _database.prisma.user.update({
        where: {
          userId: userId
        },
        data: { ...data,
          updatedAt: (0, _utils.createdAt)()
        }
      });
    }
  }

  static async confirmUser(userId) {
    const user = await _database.prisma.user.findUnique({
      where: {
        userId: userId
      },
      select: {
        code: true
      }
    });

    if (user) {
      return user.code;
    }
  }

  static async confirmEmail(userId) {
    await _database.prisma.user.update({
      where: {
        userId: userId
      },
      data: {
        active: true
      }
    });
  }

}

exports.AuthRepository = AuthRepository;