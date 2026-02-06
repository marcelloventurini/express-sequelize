const PersonServices = require('../services/person.services.js');
const Controller = require('./controller.js');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async getEnrollments(req, res) {
    const { estudanteId } = req.params;
    try {
      const enrollmentList = await personServices.getEnrollmentsByStudent(
        Number(estudanteId),
      );

      return res.status(200).json(enrollmentList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAllPeople(req, res) {
    try {
      const allPeopleList = await personServices.getPeopleScopeAll();
      return res.status(200).json(allPeopleList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PersonController;
