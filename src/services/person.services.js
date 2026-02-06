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

  async getPeopleScopeAll() {
    const personList = await super.getRegistersByScope('allRegisters');
    return personList;
  }
}

module.exports = PersonServices;
