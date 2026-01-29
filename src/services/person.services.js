const Services = require('./services.js');

class PersonServices extends Services {
  constructor() {
    super('Person');
  }
}

module.exports = PersonServices;
