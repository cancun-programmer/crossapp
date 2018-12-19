'use strict';
const User = require('../models/user');

//Metodo que trae todos los Members activos
function getUsers(req, res) {
    User.getUsers((err, users) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener los usuarios' });
        } else {
            res.status(200).send({ users });
        }
    });
}

//Metodo que busca un usuario por Email
/*function getEmail(req, res) {
    let usuarioEmail = req;
   // console.log('params = ' + usuarioEmail);
    Usuario.getEmail(usuarioEmail, (err, email) => {
        let emailEncontrado = email[0];
        //console.log(emailEncontrado);
        //console.log(Object.keys(email).length);
        if (err) {
            res.status(500).send({ message: 'Error al obtener el email', err });
        } else {
            if (Object.keys(email).length == 0 || emailEncontrado.email != usuarioEmail) {
                res.status(400).send({ message: 'Email disponible' });
            } else {
                res.status(200).send({ message: 'Email ya está en uso', email });
            }
        }
        //console.log(email)
    });
}*/

//Metodo que busca un usuario por Email
/*const getEmail = (usuarioEmail) => {
    let promise = new Promise((resolve, reject) => {
        Usuario.getEmail(usuarioEmail, (err, email) => {
            let emailEncontrado = email[0];
                if (Object.keys(email).length == 0 || emailEncontrado.email != usuarioEmail) {
                    resolve(400);
                } else {
                    reject(200);
                }
        });
    });
    return promise;
}*/

//Metodo que guarda un nuevo Member
function saveUser(req, res) {
    let params = req.body;
    let user = new User({
        name: params.name,
        role: params.role,
        username: params.username,
        password: params.password,
        status: params.status
    });
    User.saveUser(user, (err, newUserSaved) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar el Usuario', err });
        } else {
            res.status(200).send({ message: 'Usuario guardado correctamante', newUserSaved });
        }
    });
}

//Metodo que actualiza un Member por ID
/*function updateMember(req, res) {
    let memberID = req.params.id;
    let update = req.body;
    Member.updateMember(memberID, update, (err, memberUpdated) => {
        console.log(memberUpdated);
        if (err) {
            res.status(500).send({ message: 'Error al actualizar los datos del Member', err });
        } else {
            res.status(200).send({ memberUpdated });
        }
    });
}*/

//Permite llamar a los metodos dentro del controlador
module.exports = {
    saveUser,
    getUsers
    //updateUser
}