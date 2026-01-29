const PersonServices = require('../services/person.services.js');
const Controller = require('./controller.js');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
