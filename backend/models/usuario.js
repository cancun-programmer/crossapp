'use strict';

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    fechaNacimiento: String,
    sexo: String,
    nota: String,
    email: String,
    telefonoCelular: Number,
    telefonoCasa: Number,
    direccion: String,
    statusMembresia: Boolean,
    foto: String,
    contactoEmergencia: String,
    parentesco: String,
    contactoEmail: String,
    contactoTelefonoCelular: Number,
    contactoTelefonoCasa: Number,
    informacionMedica: String,
    municipio: String,
    edad: Number
});

const Usuario = module.exports = mongoose.model('Usuario', usuarioSchema);

module.exports.getUsuarios = function(callback){
    Usuario.find({status: true}).sort('-_id').exec(callback);
}

module.exports.getEmail = function(email, callback){
    Usuario.find({email: email},{email:1}).lean().exec(callback);
}

module.exports.saveUsuario = function (newUsuario, callback){
    newUsuario.save(callback);
}

module.exports.updateOficio = function (id, update, callback){
    Usuario.findByIdAndUpdate(id, update, callback);
}

module.exports.deleteUsuario = function (id, callback){
    Usuario.findByIdAndDelete(id, callback);
}