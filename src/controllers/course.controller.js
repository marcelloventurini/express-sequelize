const { Op } = require('sequelize');
const CourseService = require('../services/course.services.js');
const Controller = require('./controller.js');

const courseServives = new CourseService();

class CourseController extends Controller {
  constructor() {
    super(courseServives);
  }

  async getCourses(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};

    // se os params existirem, criar uma propriedade {}
    data_inicial || data_final ? (where.data_inicio = {}) : null;

    // se existir data inicial, adicionar a propriedade gte com o valor
    data_inicial ? (where.data_inicio[Op.gte] = data_inicial) : null;

    // se existir data final, adicional a propriedade lte com o valor
    data_final ? (where.data_inicio[Op.lte] = data_final) : null;

    try {
      const coursesList = await courseServives.getAllRegisters(where);
      return res.status(200).json(coursesList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CourseController;
