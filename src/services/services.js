const dataSource = require('../models/index.js');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }
}

module.exports = Services;
