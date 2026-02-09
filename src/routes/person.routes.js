const { Router } = require('express');
const PersonController = require('../controllers/person.controller.js');
const EnrollmentController = require('../controllers/enrollment.controller.js');

const personController = new PersonController();
const enrollmentController = new EnrollmentController();

const router = Router();

router.get('/pessoas', (req, res) => personController.getAll(req, res));
router.get('/pessoas/todos', (req, res) =>
  personController.getAllPeople(req, res),
);
router.get('/pessoas/:id', (req, res) => personController.getById(req, res));
router.post('/pessoas/', (req, res) => personController.create(req, res));
router.put('/pessoas/:id', (req, res) => personController.update(req, res));
router.delete('/pessoas/:id', (req, res) => personController.delete(req, res));

router.get('/pessoas/:estudanteId/matriculas', (req, res) =>
  personController.getActiveEnrollments(req, res),
);
router.get('/pessoas/:estudanteId/matriculas/todos', (req, res) =>
  personController.getAllEnrollments(req, res),
);
router.post('/pessoas/:estudanteId/matriculas', (req, res) =>
  enrollmentController.create(req, res),
);

module.exports = router;
