const { Router } = require('express');
const CategoryController = require('../controllers/category.controller.js');

const categoryController = new CategoryController();

const router = Router();

router.get('/categorias', (req, res) => categoryController.getAll(req, res));
router.get('/categorias/:id', (req, res) =>
  categoryController.getById(req, res),
);
router.post('/categorias', (req, res) => categoryController.create(req, res));
router.put('/categorias/:id', (req, res) =>
  categoryController.update(req, res),
);
router.delete('/categorias/:id', (req, res) =>
  categoryController.delete(req, res),
);

module.exports = router;
