const nome = 'Bruno';
const sobrenome = 'Lima';


const falaNome = () => nome + ' ' + sobrenome;

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar'; // this é do objeto global exports


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// Na chave Pessoa do objeto exports do node, recebe a clasee Pessoa.
exports.Pessoa = Pessoa;


// Podemos fazer dessa forma também
module.exports = {
    nome, sobrenome, Pessoa
}
