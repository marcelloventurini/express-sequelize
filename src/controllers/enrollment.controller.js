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
          estudante_id: Number(estudante_id),
          status: 'matriculado',
        });

      return res.status(200).json(enrollmentsByStudentList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = EnrollmentController;
