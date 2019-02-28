'use strict';
const Payment = require('../models/payment');

//Metodo que trae los pagos de una membresia
function getPaymentsByMembership(req, res) {
    let membershipID = req.params.id;
    //console.log(memberID);
    Payment.getPaymentsByMembership(membershipID, (err, payments) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener los pagos' });
        } else {
            res.status(200).send({ payments });
        }
    });
}

//Metodo que guarda un nuevo Pago
function savePayment(req, res) {
    let params = req.body;
    let payment = new Payment({
        paymentDate: params.paymentDate,
        paymentType: params.paymentType,
        amount: params.amount,
        comments: params.comments,
        membershipID: params.membershipID
    });

    Payment.savePayment(payment, (err, newPaymentSaved) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar el pago', err });
        } else {
            res.status(200).send({ message: 'Pago guardado correctamante', newPaymentSaved });
        }
    });
}

//Metodo que actualiza un pago
function updatePayment(req, res) {
    let paymentID = req.params.id;
    let update = req.body;
    Payment.updatePayment(paymentID, update, (err, paymentUpdated) => {
        //console.log(memberUpdated);
        if (err) {
            res.status(500).send({ message: 'Error al actualizar el pago', err });
        } else {
            res.status(200).send({ paymentUpdated });
        }
    });
}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    getPaymentsByMembership,
    savePayment,
    updatePayment
}