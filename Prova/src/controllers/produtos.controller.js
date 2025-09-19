const clientes = require("../data/clientes.data");
const pedidos = require("../data/pedidos.data");
const produtos = require("../data/produtos.data");

const listarProdutos = (req, res) => {
    res.status(200).send(produtos).end();
};

const cadastrarproduto = (req, res) => {
    produtos.push(req.body);
    res.status(202).send("Cliente cadastrado com sucesso!").end();
};

const atualizardados = (req, res) => {
    const idProduto = req.params.id;
    const novosDados = req.body;

    var indicie = -1;

    produtos.forEach ((produto, index) => {
        if (produto.id === idProduto) indicie = index;
    });

    if (indicie === -1){
        res.status(404).end();
    } else {
         Object.keys(novosDados).forEach ((key) => {
            produtos[indicie][key] = novosDados[key];
        });
        res.status(204).end();
    }
};


const buscarproduto = (req, res) => {
    //      /produtos/id
    const idProduto = req.params.id;

    var prod = "não encontrado";

    produtos.forEach((produto, index) => {
        if (produto.id === idProduto){
            prod  = produto;
    
        }
    });
    res.send(prod).end();
};

const apagarproduto = (req, res) => {
    // / produto/id
    const idProduto = req.params.id;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if (produto.id === idProduto) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    }else {
        produtos.splice(indice, 1);
        res.status(204).end();
    }
};


module.exports = {
    cadastrarproduto,
    atualizardados,
    buscarproduto,
    apagarproduto,
    listarProdutos
}