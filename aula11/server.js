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
 * SESSÃO
 */
const session = require('express-session'); // Salva a sessão na memoria do navegador.
const MongoStore = require('connect-mongo')(session); // Armazenamento de sessão do MongoDB para Connect e Express.
const flash = require('connect-flash'); // O flash é uma área especial da sessão usada para armazenar mensagens. As mensagens são gravadas no flash e apagadas após serem exibidas ao usuário.

/**
 * Criando SESSÃO
 */
const sessionOptions = session({
    secret: 'asadasdjoasjdoaj',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // em sete dias 
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

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
