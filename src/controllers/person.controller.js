const database = require('../models/index.js');

class PersonController {
  static async getAll(req, res) {
    try {
      const peopleList = await database.Person.findAll();
      return res.status(200).json(peopleList);
    } catch (error) {
      // error handling
    }
  }
}

module.exports = PersonController;
