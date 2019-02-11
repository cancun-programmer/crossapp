'use strict';
const Membership = require('../models/membership');

//Metodo que trae todos los Members activos
function getMemberships(req, res) {
    let memberID = req.params.id;
    console.log(memberID);
    Membership.getMembershipsByID(memberID, (err, memberships) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener las membresìas' });
        } else {
            res.status(200).send({ memberships });
        }
    });
}

//Metodo que guarda un nuevo Member
function saveMembership(req, res) {
    let params = req.body;
    let membership = new Membership({
        gymName : params.gymName,
        membershipType : params.membershipType,
        startDate : params.startDate,
        endDate: params.endDate,
        price : params.price,
        paymentType : params.paymentType,
        memberID: params.memberID
    });

    Membership.saveMembership(membership, (err, newMembershipSaved) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la membresìa', err });
        } else {
            res.status(200).send({ message: 'Membresìa guardada correctamante', newMembershipSaved });
        }
    });
}

//Metodo que actualiza un Member por ID
function updateMembership(req, res) {
    let memberID = req.params.id;
    let update = req.body;
    Membership.updateMembership(memberID, update, (err, membershipUpdated) => {
        //console.log(memberUpdated);
        if (err) {
            res.status(500).send({ message: 'Error al actualizar los datos de la membresìa', err });
        } else {
            res.status(200).send({ membershipUpdated });
        }
    });
}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    saveMembership,
    getMemberships,
    updateMembership
}