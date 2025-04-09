const express = require('express');
const router = express.Router();

const {
  renderLibros,
  mostrarFormularioAgregar,
  createLibro,
  renderLibroEdit,
  editLibro,
  deleteLibro,
} = require('../controllers/libros.controller');

router.get('/', renderLibros);
router.get('/libros/add', mostrarFormularioAgregar);
router.post('/libros/add', createLibro);
router.get('/edit/:id', renderLibroEdit);
router.post('/edit/:id', editLibro);
router.get('/delete/:id', deleteLibro);

module.exports = router;
