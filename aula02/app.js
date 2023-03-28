const Cachorro = require('./Z/mod2');

const c1 = new Cachorro('Dog');
c1.latir();

const path = require('path');

/**
 * As vezes não sabemos onde a aplicação vai ser hospedada, se é em um server windows ou linux.
 * Para não ter problemas de / ou \ ao navegar pelos diretórios, utilizamos a função resolve().
 */
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));

console.log(__filename); // Pega até o arquivo
console.log(__dirname);  // Pega até a pasta
