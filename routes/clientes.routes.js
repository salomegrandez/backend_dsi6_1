const express = require("express");
const router = express.Router();
const personaController = require("../controllers/clientes.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

router.post("/clientes", verifyToken, personaController.createPersona);
router.get("/clientes", verifyToken, personaController.getPersonas);
router.get("/cliente/:id", verifyToken, personaController.getPersonaById);
router.put("/clientes/:id", verifyToken, personaController.updatePersona);
router.delete("/clientes/:id", verifyToken, personaController.deletePersona);

module.exports = router;
