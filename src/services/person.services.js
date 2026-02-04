const Services = require('./services.js');

class PersonServices extends Services {
  constructor() {
    super('Person');
  }

  async getEnrollmentsByStudent(id) {
    const student = await super.getRegisterById(id);
    const enrollmentList = await student.getEnrolledClasses();

    return enrollmentList;
  }
}

module.exports = PersonServices;
