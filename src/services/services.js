const dataSource = require('../models/index.js');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }

  async updateRegister(updatedData, id) {
    const updatedRegistersList = dataSource[this.model].update(updatedData, {
      where: {
        id: id,
      },
    });

    if (updatedRegistersList[0] === 0) {
      return false;
    }

    return true;
  }
}

module.exports = Services;
