// camada responsável pela lógica do negócio e dados;
// ela conhece os métodos do Sequelize, mas não sabe o que é um objeto 'res' ou um status 404.
const dataSource = require('../database/models/index.js');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }

  async getRegistersByScope(scope) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async getRegister(where) {
    return dataSource[this.model].findOne({ where: { ...where } });
  }

  async createRegister(data) {
    return dataSource[this.model].create(data);
  }

  async updateRegister(updatedData, id) {
    const updatedRegisterList = dataSource[this.model].update(updatedData, {
      where: {
        id: id,
      },
    });

    if (updatedRegisterList[0] === 0) {
      return false;
    }

    return true;
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
