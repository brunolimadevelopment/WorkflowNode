/**
 * O Model é responsável por criar, validar e buscar os dados.
 */

const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);


class Home {

}

module.exports = Home;