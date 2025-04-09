import Libro from "../models/Libro";

export const renderLibros = async (req, res) => {
  const libros = await Libro.find().lean();
  console.log(libros[0]);
  res.render("index", { libros: libros });
};

export const createLibro = async (req, res) => {
  try {
    const libro = Libro(req.body);
    await libro.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderLibroEdit = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id).lean();
    res.render("edit", { libro: libro });
  } catch (error) {
    console.log(error.message);
  }
};

export const editLibro = async (req, res) => {
  const { id } = req.params;
  await Libro.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteLibro = async (req, res) => {
  const { id } = req.params;
  await Libro.findByIdAndDelete(id);
  res.redirect("/");
};
