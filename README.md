# 📚 CRUD de Gestión de Biblioteca con MySQL (XAMPP & HeidiSQL)

Este proyecto es un CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar una biblioteca. Permite agregar, editar, eliminar y listar libros, almacenando la información en una base de datos MySQL gestionada con XAMPP y HeidiSQL.

## ✨ Características

* 📕 **Agregar libros:** Permite ingresar el título, autor y año de publicación de un libro.
* 📋 **Listar libros:** Muestra una tabla con todos los libros registrados en la base de datos.
* ✏️ **Editar libros:** Permite modificar la información de un libro existente.
* ❌ **Eliminar libros:** Permite eliminar un libro de la base de datos.
* 💾 **Almacenamiento en MySQL:** Utiliza una base de datos MySQL gestionada con XAMPP y HeidiSQL para persistir los datos.
* 🎨 **Estilos CSS:** Se incluyen estilos personalizados para mejorar la apariencia de la aplicación.

## 🛠️ Tecnologías utilizadas

* ⚙️ **Node.js:** Entorno de ejecución de JavaScript del lado del servidor.
* 🚀 **Express.js:** Framework web para Node.js.
* 🐬 **MySQL:** Sistema de gestión de bases de datos relacional.
* 🧰 **XAMPP:** Paquete de software que incluye MySQL, Apache y PHP (para la gestión de MySQL).
* 🖥️ **HeidiSQL:** Interfaz gráfica para administrar bases de datos MySQL.
* 📝 **Handlebars (HBS):** Motor de plantillas para generar HTML dinámico.
* 🔄 **Babel:** Transpilador de JavaScript (opcional, si usas sintaxis moderna).
* 🎨 **CSS:** Estilos personalizados para la interfaz de usuario.

## ⚙️ Requisitos

* Node.js instalado en tu sistema.
* XAMPP instalado y configurado con MySQL funcionando.
* HeidiSQL instalado (opcional, pero recomendado para la gestión de la base de datos).
* `npm` o `yarn` para gestionar dependencias.

## 🚀 Instalación

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/luiyi45/CRUD_biblioteca.git
    cd <nombre_del_proyecto>
    ```

2.  Instala las dependencias:

    ```bash
    npm install
    ```

    o

    ```bash
    yarn install
    ```

3.  Configura la base de datos en MySQL:

    * Inicia los servicios de Apache y MySQL en XAMPP Control Panel.
    * Abre HeidiSQL y conéctate a tu servidor MySQL (por defecto, usuario `root` sin contraseña).
    * Crea una nueva base de datos llamada `biblioteca`.
    * Crea una tabla llamada `libros` con las siguientes columnas:
        * `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
        * `titulo` (VARCHAR)
        * `autor` (VARCHAR)
        * `anio_publicacion` (INT)

4.  Configura las variables de entorno:

    * Crea un archivo `.env` en la raíz del proyecto.
    * Agrega la configuración de conexión a tu base de datos MySQL:

        ```
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=
        DB_NAME=biblioteca
        ```

        Reemplaza los valores con tu configuración si es diferente.

5.  Ejecuta la aplicación:

    ```bash
    npm run dev
    ```

    o

    ```bash
    yarn run dev
    ```

6.  Abre tu navegador y visita `http://localhost:3000` (o el puerto que hayas configurado).

## 📁 Estructura del proyecto

 ```
    .
    ├── node_modules/
    ├── src/
    │   ├── controllers/
    │   │   └── libros.controller.js
    │   ├── models/
    │   │   └── Libro.js
    │   ├── public/
    │   │   └── css/
    │   │       └── main.css
    │   ├── routes/
    │   │   └── index.routes.js
    │   ├── views/
    │   │   ├── layouts/
    │   │   │   └── main.hbs
    │   │   ├── partials/
    │   │   │   ├── libros/
    │   │   │   │   ├── libroForm.hbs
    │   │   │   │   ├── libroTable.hbs
    │   │   │   ├── navbar.hbs
    │   │   │   ├── edit.hbs
    │   │   │   └── index.hbs
    │   ├── app.js
    │   ├── database.js
    │   └── index.js
    ├── .babelrc (opcional)
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
 ```

## 📌 Notas adicionales
Este proyecto sigue el patrón MVC (Modelo-Vista-Controlador).

Puedes extender la funcionalidad para agregar categorías, usuarios, préstamos, etc.

Recomendado usar herramientas como Postman para probar las rutas del backend.

## 🧑‍💻 Autor
Desarrollado por Luiyi❤️.
