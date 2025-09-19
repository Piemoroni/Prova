const express = require("express");
const router = express.Router();
const ClientesController = require("../controllers/clientes.controller");

router.get("/clientes", ClientesController.listarclientes);
router.post("/cliente", ClientesController.cadastrarcliente);
router.get("/clientes/:cpf", ClientesController.buscarporcpf);

module.exports = router;