const Sequelize = require('sequelize');
const EnrollmentServices = require('../services/enrollment.services.js');
const Controller = require('./controller.js');

const enrollmentService = new EnrollmentServices();

class EnrollmentController extends Controller {
  constructor() {
    super(enrollmentService);
  }

  async getEnrollmentsByStudent(req, res) {
    const { estudante_id } = req.params;

    try {
      const enrollmentsByStudentList =
        await enrollmentService.getAndCountRegisters({
          where: {
            estudante_id: Number(estudante_id),
            status: 'matriculado',
          },
        });

      return res.status(200).json(enrollmentsByStudentList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getFullCourses(req, res) {
    const courseCapacity = 2;
    try {
      const fullCourses = await enrollmentService.getAndCountRegisters({
        where: {
          status: 'matriculado',
        },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${courseCapacity}`),
      });
      return res.status(200).json(fullCourses);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = EnrollmentController;
