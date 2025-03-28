const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Estacionamento ACME' });
});

module.exports = routes;