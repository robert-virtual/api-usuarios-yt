const Usuario = require("../models/Usuario");

const router = require("express").Router();

// obtener todos los usuarios
router.get("/", async (req, res) => {
  const usuarios = await Usuario.findAll();

  res.json(usuarios);
});

// un solo usuario
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);

  res.json(usuario);
});

// crear un usuario
router.post("/", async (req, res) => {
  const { nombre, email } = req.body;

  if (!nombre || !email) {
    console.log("crear usuario:", req.body);
    return res.status(400).json({
      error: "uno o mas campos vacios",
    });
  }
  const usuario = await Usuario.create({ nombre, email });
  console.log("usuario creado");
  res.json(usuario);
});

module.exports = router;
