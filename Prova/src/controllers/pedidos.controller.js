const pedidos = require("../data/pedidos.data");
const clientes = require("../data/clientes.data");
const produtos = require("../data/produtos.data");

const cadastrapedido = (req, res) => {
    pedidos.push(req.body);
    res.status(202).send("Cliente cadastrado com sucesso!").end();
};


const atualizarstatuspedido = (req, res) => {
    const idPedido = req.params.id;
    const novosDados = req.body;

    var indicie = -1;

    pedidos.forEach ((pedido, index) => {
        if (pedido.id === idPedido) indicie = index;
    });

    if (indicie === -1){
        res.status(404).end();
    } else {
         Object.keys(novosDados).forEach ((key) => {
            pedidos[indicie][key] = novosDados[key];
        });
        res.status(204).end();
    }
};

const listarpedidos = (req, res) => {
    res.status(200).send(pedidos).end();
};

const consultarpedidos = (req, res) => {
    //      /pedidos/id
    const idPedido = req.params.id;

    var pedi = "não encontrado";

    pedidos.forEach((pedido, index) => {
        if (pedido.id === idPedido){
            pedi  = pedido;
    
        }
    });
    res.send(pedi).end();
};


module.exports = {
    cadastrapedido,
    atualizarstatuspedido,
    listarpedidos,
    consultarpedidos
}