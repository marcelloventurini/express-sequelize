const Services = require('./services.js');

class PersonServices extends Services {
  constructor() {
    super('Person');
    this.enrollmentServices = new Services('Enrollment');
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

  async cancelPersonAndEnrollments(id) {
    await super.updateRegister({ ativo: false }, { id: id });
    await this.enrollmentServices.updateRegister(
      { status: 'cancelado' },
      { estudante_id: id },
    );
  }
}

module.exports = PersonServices;
