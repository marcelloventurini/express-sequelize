const express = require('express');
const person = require('./person.routes.js');
const category = require('./category.routes.js');
const course = require('./course.routes.js');

module.exports = (app) => {
  app.use(express.json(), person, category, course);
};
