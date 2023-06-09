/**
 * Middlewares - é apenas uma função passada na rota. ela pode ser passada antes ou depois de chamar o controller.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next Deve ser sempre utilizado quando se está trabalhando com Middlewares, para que seja executada todas as funções da rota.
 */
exports.middlewareGlobal  = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
    next();
};

exports.outroMiddleware  = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EVADCSRFTOKEN') {
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};