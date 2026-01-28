const { Router } = require('express');
const PersonController = require('../controllers/person.controller.js');

const router = Router();
router.get('/pessoas', PersonController.getAll);

module.exports = router;
