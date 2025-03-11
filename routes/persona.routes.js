const express = require("express");
const router = express.Router();
const personaController = require("../controllers/persona.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

router.post("/personas", verifyToken, personaController.createPersona);
router.get("/personas", verifyToken, personaController.getPersonas);

module.exports = router;
