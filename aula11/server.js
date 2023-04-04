require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

/**
 * Conectando com MongoDB
 */

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectei à base de dados.');
        app.emit('pronto');
    }).catch(e => console.log(e));
    



/**
 * Importa as rotas da aplicação.
 */
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true })); // Para que possamos ver a body da requisição do tipo post.
app.use(express.static(path.resolve(__dirname, 'public'))); // Conteúdo estático

/**
 * Renderizando arquivos da pasta views
 */
app.set('views', path.resolve(__dirname, 'src', 'views')); // Path absoluto de views.
app.set('view engine', 'ejs'); // Para renderizar for, if e outros nos views.

/**
 * Middlewares
 */
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});
