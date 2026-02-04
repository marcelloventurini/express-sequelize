const Services = require('./services.js');

class CourseService extends Services {
  constructor() {
    super('Course');
  }
}

module.exports = CourseService;
