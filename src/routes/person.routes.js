const { Router } = require('express');
const PersonController = require('../controllers/person.controller.js');

const personController = new PersonController();

const router = Router();
router.get('/pessoas', (req, res) => personController.getAll(req, res));

module.exports = router;
