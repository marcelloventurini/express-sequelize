const CategoryServices = require('../services/category.services.js');
const Controller = require('./controller.js');

const categoryServices = new CategoryServices();

class CategoryController extends Controller {
  constructor() {
    super(categoryServices);
  }
}

module.exports = CategoryController;
