'use strict';
const Member = require('../models/member');

//Metodo que trae todos los Members activos
function getMembers(req, res) {
    Member.getMembers((err, members) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener los Members' });
        } else {
            res.status(200).send({ members });
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
function saveMember(req, res) {
    let params = req.body;
    let member = new Member({
        name: params.name,
        lastname: params.lastname,
        birthdate: params.birthdate,
        sex: params.sex,
        comments: params.comments,
        email: params.email,
        cellphone: params.cellphone,
        homephone: params.homephone,
        address: params.address,
        status: params.status,
        picture: params.picture,
        emergencyContact: params.emergencyContact,
        relationship: params.relationship,
        contactEmail: params.contactEmail,
        contactCellPhone: params.contactCellPhone,
        contactHomePhone: params.contactHomePhone,
        medicalInformation: params.medicalInformation,
        age: params.age
    });

    Member.saveMember(member, (err, newMemberSaved) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar el Usuario', err });
        } else {
            res.status(200).send({ message: 'Usuario guardado correctamante', newMemberSaved });
        }
    });
}

//Metodo que actualiza un Member por ID
function updateMember(req, res) {
    let memberID = req.params.id;
    let update = req.body;
    Member.updateMember(memberID, update, (err, memberUpdated) => {
        //console.log(memberUpdated);
        if (err) {
            res.status(500).send({ message: 'Error al actualizar los datos del Member', err });
        } else {
            res.status(200).send({ memberUpdated });
        }
    });
}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    saveMember,
    getMembers,
    updateMember
}