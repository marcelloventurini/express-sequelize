const Services = require('./services.js');

class PersonServices extends Services {
  constructor() {
    super('Person');
  }

  async getActiveEnrollmentsByStudent(id) {
    const student = await super.getRegisterById(id);
    const enrollmentList = await student.getEnrolledClasses();

    return enrollmentList;
  }

  async getAllEnrollmentsByStudent(id) {
    const student = await super.getRegisterById(id);
    const allEnrollments = await student.getAllEnrollments();
    return allEnrollments;
  }

  async getPeopleScopeAll() {
    const personList = await super.getRegistersByScope('allRegisters');
    return personList;
  }
}

module.exports = PersonServices;
