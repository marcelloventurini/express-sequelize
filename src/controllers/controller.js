class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registerList = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(registerList);
    } catch (error) {
      // todo
    }
  }
}

module.exports = Controller;
