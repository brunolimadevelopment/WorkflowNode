// Require é do node js, usamos para importar coisas que forma exportadas com o exports, module.exports ou this.exemplo
const path = require('path');
const axios = require('axios');

const { Pessoa } = require('./mode1');
const { nome, sobrenome, falaNome } = require('./mode1'); // Destructuring

//console.log(nome, sobrenome);
// console.log(falaNome());

const p1 = new Pessoa('Bruno');
console.log(p1);

// Usando Axios
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));