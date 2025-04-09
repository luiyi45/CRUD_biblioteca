const db = require('../database');

// Listar todos los libros
function renderLibros(req, res) {
  db.query('SELECT * FROM libros', (err, resultados) => {
    if (err) throw err;
    res.render('index', { libros: resultados });
  });
}

// Mostrar formulario para agregar libro
function mostrarFormularioAgregar(req, res) {
  res.render('libros/libroForm');
}

// Crear libro
function createLibro(req, res) {
  const { title, author, date } = req.body;
  db.query('INSERT INTO libros (title, author, date) VALUES (?, ?, ?)', [title, author, date], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
}

// Mostrar formulario para editar libro
function renderLibroEdit(req, res) {
  const { id } = req.params;
  db.query('SELECT * FROM libros WHERE id = ?', [id], (err, resultados) => {
    if (err) throw err;
    res.render('edit', { libro: resultados[0] });
  });
}

// Editar libro
function editLibro(req, res) {
  const { id } = req.params;
  const { title, author, date } = req.body;
  db.query('UPDATE libros SET title = ?, author = ?, date = ? WHERE id = ?', [title, author, date, id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
}

// Eliminar libro
function deleteLibro(req, res) {
  const { id } = req.params;
  db.query('DELETE FROM libros WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
}

// EXPORTAR
module.exports = {
  renderLibros,
  mostrarFormularioAgregar,
  createLibro,
  renderLibroEdit,
  editLibro,
  deleteLibro,
};
