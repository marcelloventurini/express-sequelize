'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'docente_id',
      });

      Person.hasMany(models.Enrollment, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'enrolledClasses',
      });
    }
  }

  Person.init(
    {
      nome: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'formato do email inválido',
          },
        },
      },
      cpf: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Person',
      tableName: 'people',
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes: {
        allRegisters: {
          where: {},
        },
      },
    },
  );

  return Person;
};
