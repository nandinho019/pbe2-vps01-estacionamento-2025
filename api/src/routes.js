const express = require('express');
const routes = express.Router();

const veiculos = require('./controllers/veiculos.js');
const Estadia = require('./controllers/estadia.js');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Estacionamento ACME' });
});

// Rotas de Veículos
routes.post('/veiculos', veiculos.create);
routes.get('/veiculos', veiculos.read);
routes.get('/veiculos/:id', veiculos.readOne);
routes.put('/veiculos/:id', veiculos.update);
routes.delete('/veiculos/:id', veiculos.remove);

// Rotas de Estadias
routes.post('/estadias', Estadia.create);
routes.get('/estadias', Estadia.read);
routes.get('/estadias/:id', Estadia.readOne);
routes.put('/estadias/:id', Estadia.update);
routes.delete('/estadias/:id', Estadia.remove);

module.exports = routes;