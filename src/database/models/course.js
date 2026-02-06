'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Category, {
        foreignKey: 'categoria_id',
      });

      Course.belongsTo(models.Person, {
        foreignKey: 'docente_id',
      });

      Course.hasMany(models.Enrollment, {
        foreignKey: 'curso_id',
      });
    }
  }

  Course.init(
    {
      titulo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      data_inicio: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses',
      paranoid: true
    },
  );

  return Course;
};
