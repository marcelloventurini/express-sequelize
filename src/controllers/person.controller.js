const PersonServices = require('../services/person.services.js');
const Controller = require('./controller.js');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async getActiveEnrollments(req, res) {
    const { estudante_id } = req.params;
    try {
      const enrollmentList = await personServices.getActiveEnrollmentsByStudent(
        Number(estudante_id),
      );

      return res.status(200).json(enrollmentList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAllEnrollments(req, res) {
    const { estudante_id } = req.params;
    try {
      const enrollmentList = await personServices.getAllEnrollmentsByStudent(
        Number(estudante_id),
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

  async cancelStudentRegistration(req, res) {
    const {estudante_id} = req.params;
    try {
      await personServices.cancelPersonAndEnrollments(Number(estudante_id));
      return res.status(200).json({mensagem: 'matrículas canceladas'});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
}

module.exports = PersonController;
