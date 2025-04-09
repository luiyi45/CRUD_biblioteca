# 📚 CRUD de Gestión de Biblioteca con MongoDB Atlas

Aplicación web para gestionar libros en una biblioteca mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Utiliza una arquitectura MVC y conecta con una base de datos en la nube utilizando MongoDB Atlas.

---

## ✨ Características

- 📕 **Agregar libros:** Añade nuevos libros ingresando título, autor y año de publicación.
- 📋 **Listar libros:** Visualiza todos los libros registrados en una tabla.
- ✏️ **Editar libros:** Modifica los datos de libros existentes.
- ❌ **Eliminar libros:** Borra libros de la base de datos.
- ☁️ **Base de datos en la nube:** Almacenamiento persistente en MongoDB Atlas.
- 🎨 **Interfaz personalizada:** Estilos CSS para una experiencia de usuario atractiva.

---

## 🛠️ Tecnologías utilizadas

- **Node.js:** Entorno de ejecución de JavaScript en el servidor.
- **Express.js:** Framework minimalista para construir aplicaciones web.
- **MongoDB Atlas:** Base de datos NoSQL alojada en la nube.
- **Handlebars (HBS):** Motor de plantillas para renderizar HTML dinámico.
- **Babel (opcional):** Permite utilizar características modernas de JavaScript.
- **CSS:** Para el diseño y estilos personalizados de la aplicación.

---

## ⚙️ Requisitos previos

- Tener instalado **Node.js**.
- Cuenta activa en **MongoDB Atlas** y una base de datos configurada.
- Gestor de paquetes como `npm` o `yarn`.

---

## 🚀 Instalación y ejecución

1.  Clona el repositorio:

    ```bash
    git clone <URL_del_repositorio>
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
3. Configura las variables de entorno
Crea un archivo .env en la raíz del proyecto y agrega tu cadena de conexión de MongoDB Atlas:

```
        MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_de_la_base_de_datos>?retryWrites=true&w=majority
        ```

        🔐 Asegúrate de reemplazar `<usuario>`, `<contraseña>`, `<cluster>` y `<nombre_de_la_base_de_datos>` con tus credenciales.

4. Ejecuta la aplicación
bash

    ```bash
    npm run dev
    ```

    o

    ```bash
    yarn run dev
    ```

5. Abre la aplicación en tu navegador de preferencia `http://localhost:3000`
Puedes modificar el puerto en el archivo de configuración si es necesario.

📁 Estructura del proyecto

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
├── package.json
├── package-lock.json
└── README.md

📌 Notas adicionales
Este proyecto sigue el patrón MVC (Modelo-Vista-Controlador).

Puedes extender la funcionalidad para agregar categorías, usuarios, préstamos, etc.

Recomendado usar herramientas como Postman para probar las rutas del backend.

🧑‍💻 Autor
Desarrollado por Luiyi❤️.


