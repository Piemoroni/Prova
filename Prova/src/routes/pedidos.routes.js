const express = require("express");
const router = express.Router();
const PedidosController = require("../controllers/pedidos.controller");

router.post("/pedidos", PedidosController.cadastrapedido);
router.patch("/pedido/:id", PedidosController.atualizarstatuspedido);
router.get("/pedido", PedidosController.listarpedidos);
router.get("/pedidos/:id", PedidosController.consultarpedidos);

module.exports = router;