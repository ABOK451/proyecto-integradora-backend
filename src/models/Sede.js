const { Schema, model } = require('mongoose');

const sedeSchema = new Schema({
    nombre: String,
    ubicacion: String  
});

const Sede = model('Sede', sedeSchema);

module.exports = Sede;
