'use strict';

const Notification = require('../models/notification');

//Metodo que trae todas las notificaciones
function getNotifications(req, res) {
    Notification.getNotifications((err, notifications) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener las Notificaciones' });
        } else {
            res.status(200).send({ notifications });
        }
    });
}


module.exports = {
    getNotifications
}