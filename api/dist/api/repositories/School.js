"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolRepository = void 0;

var _database = require("../database");

class SchoolRepository {
  static async isSchool(userId) {
    const isSchool = await _database.prisma.profile.findUnique({
      where: {
        userId: userId
      },
      select: {
        school: true
      }
    });

    if (isSchool.school) {
      return true;
    }

    return false;
  }

  static async create(userId, data) {
    await _database.prisma.school.create({
      data: {
        address: data.address,
        city: data.address.city,
        cnpj: data.cnpj,
        fantasia: data.fantasia,
        // logo: data.logo,
        state: data.address.state,
        userId: userId
      }
    });
  }

  static async update(userId, data) {
    await _database.prisma.school.update({
      where: {
        userId: userId
      },
      data: {
        address: data.address,
        city: data.address.city,
        cnpj: data.cnpj,
        fantasia: data.fantasia,
        state: data.address.state,
        contacts: data.contacts
      }
    });
  }

}

exports.SchoolRepository = SchoolRepository;