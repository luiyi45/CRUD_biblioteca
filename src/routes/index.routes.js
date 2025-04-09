import { Router } from "express";

import {
  renderLibros,
  createLibro,
  renderLibroEdit,
  editLibro,
  deleteLibro,
} from "../controllers/libros.controller.js";

const router = Router();

router.get("/", renderLibros);

router.post("/libros/add", createLibro);

router.get("/edit/:id", renderLibroEdit);

router.post("/edit/:id", editLibro);

router.get("/delete/:id", deleteLibro);

export default router;
