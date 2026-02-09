// camada responsável por lidar com requisições e respostas HTTP;
// ela não sabe como o banco funciona.

const idConverter = require('../utils/string-converter.helper.js');

class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registerList = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(registerList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      const register = await this.serviceEntity.getRegisterById(Number(id));
      return res.status(200).json(register);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getOne(req, res) {
    const { ...params } = req.params;
    const where = idConverter(params);
    try {
      const register = await this.serviceEntity.getRegister(where);
      return res.status(200).json(register);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    const data = req.body;
    try {
      const newRegister = await this.serviceEntity.createRegister(data);
      return res.status(200).json(newRegister);
    } catch (error) {
      return res.status(500).json({ error: error.message });
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
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.serviceEntity.deleteRegister(Number(id));
      return res.status(200).json({ mensagem: 'registro apagado' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;
