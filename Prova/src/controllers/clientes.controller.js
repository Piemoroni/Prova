const clientes = require("../data/clientes.data");
const pedidos = require("../data/pedidos.data");
const produtos = require("../data/produtos.data");

const listarclientes = (req, res) => {
    res.status(200).send(clientes).end();
};

const cadastrarcliente = (req, res) => {
    clientes.push(req.body);
    res.status(202).send("Cliente cadastrado com sucesso!").end();
};

const buscarporcpf = (req, res) => {
    const cpfclientes= req.params.cpf;


    var c = "nao encontrado";

    clientes.forEach((clientes, index) => {
        if(clientes.cpf === cpfclientes){
            c = clientes;
        }
    });

    res.send(c).end();
};

module.exports = {
    cadastrarcliente,
    buscarporcpf,
    listarclientes
}