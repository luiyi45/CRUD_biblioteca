const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Usuario por defecto en XAMPP
  password: '',         // Sin contraseña por defecto
  database: 'crud_biblioteca' // El nombre de tu base de datos
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL con XAMPP');
});

module.exports = db;
