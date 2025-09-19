const express = require("express");
const router = express.Router();
const ProdutosController = require("../controllers/produtos.controller");

router.get("/produto", ProdutosController.listarProdutos);
router.post("/produtos", ProdutosController.cadastrarproduto);
router.patch("/produto/:id", ProdutosController.atualizardados);
router.get("/produtos/:id", ProdutosController.buscarproduto);
router.delete("/produto/:id", ProdutosController.apagarproduto);

module.exports = router;