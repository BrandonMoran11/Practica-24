const mongoose = require('mongoose');
let personSchema = new mongoose.Schema({// decimos que personSchema es una nuevo schema de mongoose con las keys de nombre, edad ,tipo sangre, nss
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});

module.exports = mongoose.model('Persons', personSchema) //exportamos el modulo de mongoose
