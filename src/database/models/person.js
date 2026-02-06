'use strict';

const isValid = require('../../utils/validate-cpf.helper.js');

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
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 30],
            msg: 'o campo nome deve ter entre 3 e 30 caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'formato do email inválido',
          },
        },
      },
      cpf: {
        type: DataTypes.STRING,
        validate: {
          cpfIsValid: (cpf) => {
            if (!isValid(cpf)) throw new Error('número de CPF inválido');
          },
        },
      },
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
