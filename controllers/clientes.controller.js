const db = require("../config/database");

// Crear cliente
exports.createPersona = (req, res) => {
  const { nombre, edad } = req.body;
  if (!nombre || !edad) return res.status(400).json({ error: "Todos los campos son obligatorios" });

  db.query("INSERT INTO persona (nombre, edad) VALUES (?, ?)", [nombre, edad], (err, result) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    res.status(201).json({ message: "Persona creada", id: result.insertId });
  });
};

// Obtener todas las personas
exports.getPersonas = (_req, res) => {
  db.query("SELECT * FROM persona", (err, results) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    res.status(200).json(results);
  });
};

// Obtener persona por ID
exports.getPersonaById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM persona WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    if (results.length === 0) return res.status(404).json({ error: "Persona no encontrada" });

    res.status(200).json(results[0]);
  });
};

// Actualizar persona por ID
exports.updatePersona = (req, res) => {
  const { id } = req.params;
  const { nombre, edad } = req.body;
  if (!nombre || !edad) return res.status(400).json({ error: "Todos los campos son obligatorios" });

  db.query("UPDATE persona SET nombre = ?, edad = ? WHERE id = ?", [nombre, edad, id], (err, result) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Persona no encontrada" });

    res.status(200).json({ message: "Persona actualizada" });
  });
};

// Eliminar persona por ID
exports.deletePersona = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM persona WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Persona no encontrada" });

    res.status(200).json({ message: "Persona eliminada" });
  });
};
