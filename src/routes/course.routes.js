const { Router } = require('express');
const CourseController = require('../controllers/course.controller.js');

const courseController = new CourseController();

const router = Router();

router.get('/cursos', (req, res) => courseController.getAll(req, res));
router.get('/cursos/:id', (req, res) => courseController.getById(req, res));
router.post('/cursos', (req, res) => courseController.create(req, res));
router.put('/cursos/:id', (req, res) => courseController.update(req, res));
router.delete('/cursos/:id', (req, res) => courseController.delete(req, res));

module.exports = router;
