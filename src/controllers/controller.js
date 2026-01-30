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

  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const isUpdated = await this.serviceEntity.updateRegister(
        updatedData,
        Number(id),
      );
      if (!isUpdated) {
        return res
          .status(400)
          .json({ mensagem: 'falha ao atualizar registro' });
      }

      return res.status(200).json({ mensagem: 'atualizado com sucesso' });
    } catch (error) {
      // todo
    }
  }
}

module.exports = Controller;
