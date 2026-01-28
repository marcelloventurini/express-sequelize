const express = require('express');
const person = require('./person.routes.js');

module.exports = (app) => {
  app.use(express.json(), person);
};
