/**
 * Middlewares - é apenas uma função passada na rota. ela pode ser passada antes ou depois de chamar o controller.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next Deve ser sempre utilizado quando se está trabalhando com Middlewares, para que seja executada todas as funções da rota.
 */
exports.middlewareGlobal  = (req, res, next) => {
    next();
}

exports.outroMiddleware  = (req, res, next) => {
    next();
}