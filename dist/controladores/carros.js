"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirCarros = exports.atualizarCarros = exports.cadastrarCarros = exports.detalharCarros = exports.listarCarros = void 0;
const conexao_1 = require("../bancodedados/conexao");
const listarCarros = async (_, res) => {
    try {
        const carros = await (0, conexao_1.knex)('carros');
        return res.status(200).json(carros);
    }
    catch (_a) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};
exports.listarCarros = listarCarros;
const detalharCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado.' });
        }
        return res.status(200).json(carro);
    }
    catch (_a) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};
exports.detalharCarros = detalharCarros;
const cadastrarCarros = async (req, res) => {
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        const carro = await (0, conexao_1.knex)('carros').insert({
            marca,
            modelo,
            ano,
            cor,
            valor
        }).returning('*');
        return res.status(201).json(carro[0]);
    }
    catch (_a) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};
exports.cadastrarCarros = cadastrarCarros;
const atualizarCarros = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        const carro = await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado.' });
        }
        await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .update({
            marca,
            modelo,
            ano,
            cor,
            valor
        }).returning('*');
        return res.status(204).send();
    }
    catch (_a) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};
exports.atualizarCarros = atualizarCarros;
const excluirCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carro = await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .first();
        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado.' });
        }
        await (0, conexao_1.knex)('carros')
            .where({ id: Number(id) })
            .del().returning('*');
        return res.status(204).send();
    }
    catch (_a) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};
exports.excluirCarros = excluirCarros;
