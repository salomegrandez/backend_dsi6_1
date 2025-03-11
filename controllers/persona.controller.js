const db = require("../config/database");

exports.createPersona = (req, res) => {
  const { nombre, edad } = req.body;
  if (!nombre || !edad) return res.status(400).json({ error: "Todos los campos son obligatorios" });

  db.query("INSERT INTO persona (nombre, edad) VALUES (?, ?)", [nombre, edad], (err, result) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    res.status(201).json({ message: "Persona creada", id: result.insertId });
  });
};

exports.getPersonas = (req, res) => {
  db.query("SELECT * FROM persona", (err, results) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    res.status(200).json(results);
  });
};
