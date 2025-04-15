const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const veiculo = await prisma.veiculo.create({
            data: req.body
        });
        res.status(201).json(veiculo).end();
    } catch (e) {
        res.status(400).json({ error: 'Erro ao criar veículo', details: e.message }).end();
    }
};

const read = async (req, res) => {
    try {
        const veiculos = await prisma.veiculo.findMany();
        res.status(200).json(veiculos);
    } catch (e) {
        res.status(500).json({ error: 'Erro ao listar veículos', details: e.message });
    }
};

const readOne = async (req, res) => {
    try {
        const veiculo = await prisma.veiculo.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        if (!veiculo) {
            return res.status(404).json({ error: 'Veículo não encontrado' }).end();
        }
        res.status(200).json(veiculo);
    } catch (e) {
        res.status(500).json({ error: 'Erro ao buscar veículo', details: e.message }).end();
    }
};

const update = async (req, res) => {
    try {
        const veiculo = await prisma.veiculo.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(veiculo).end();
    } catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar veículo', details: e.message }).end();
    }
};

const remove = async (req, res) => {
    try {
        await prisma.veiculo.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).send();
    } catch (e) {
        res.status(400).json({ error: 'Erro ao deletar veículo', details: e.message }).end();
    }
};

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
};