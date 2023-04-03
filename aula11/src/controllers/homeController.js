/**
 * Controla o que será enviado/exibido em cada Rota da aplicação.
 */
 exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}