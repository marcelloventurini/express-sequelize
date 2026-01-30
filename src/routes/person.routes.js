const { Router } = require('express');
const PersonController = require('../controllers/person.controller.js');

const personController = new PersonController();

const router = Router();
router.get('/pessoas', (req, res) => personController.getAll(req, res));
router.get('/pessoas/:id', (req, res) => personController.getById(req, res));
router.post('/pessoas/', (req, res) => personController.create(req, res));
router.put('/pessoas/:id', (req, res) => personController.update(req, res));

module.exports = router;
