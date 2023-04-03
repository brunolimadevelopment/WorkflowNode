const express = require('express');
const route = express.Router();

/**
 *  Importa os controlles em cada Rota especificada. 
 */
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/contato', contatoController.paginaContato);



module.exports = route;