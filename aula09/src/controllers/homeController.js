/**
 * Controla o que será enviado/exibido em cada Rota da aplicação.
 */
 exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST');
}