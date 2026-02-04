const EnrollmentServices = require('../services/enrollment.services.js');
const Controller = require('./controller.js');

const enrollmentService = new EnrollmentServices();

class EnrollmentController extends Controller {
  constructor() {
    super(enrollmentService);
  }
}

module.exports = EnrollmentController;
