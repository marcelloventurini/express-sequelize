const CourseService = require('../services/course.services.js');
const Controller = require('./controller.js');

const courseServives = new CourseService();

class CourseController extends Controller {
  constructor() {
    super(courseServives);
  }
}

module.exports = CourseController;
