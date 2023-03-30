const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome">
            Sobrenome do cliente: <input type="text" name="sobrenome">
            <button>Enviar </button>
        </form>
    `);
});

// Para passar parametro na rota, basta colocar :nome-do-parametro o uso do ? faz com que o parametro seja opcional.
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params); // exibe no terminal os parametros
    console.log(req.query); // Quando fazemos um submit em um formulário, utilizamos o query para pegar os dados do body da requisição
    res.send(req.query.facebook); // http://localhost:3000/testes/123/teste?facebook=teste // mostra na tela o valor do parametro facebook
})
app.post('/', (req, res) => {
    console.log(req.body); // req.body - exibe no terminal os dados que foram enviados do navegador 
    
    res.send(`O que vc me enviou foi: ${req.body.nome} ${req.body.sobrenome}`);
   
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});