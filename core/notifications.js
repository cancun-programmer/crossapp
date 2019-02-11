'use strict';

const Membership = require('../models/membership');
const Notification = require('../models/notification');

//Metodo que ejecuta los metodos de notificaciones
function generateNotification(req, res) {
    expiredMembershipNotification();
    experitationAlertNotification();
}


/**
 4 tipos de notificaciones.
 Vencimiento proximo - alert
 Vencido - expired
 */

function expiredMembershipNotification() {
    var datetime = new Date();
    Membership.getMemberships((err, memberships) => {
        //console.log(element.endDate);
        memberships.forEach(element => {
            if (element.endDate < datetime) {
                console.log(element.endDate);
                let notification = new Notification({
                    readStatus: 0,
                    member: element.memberID,
                    message: 'La membresía de ' + element.memberName + ' está vencida',
                    notificationType: 'expired',
                    notificationDate: datetime
                });
                Notification.createNotification(notification, (err) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al guardar la notificación', err });
                    } else {
                        res.status(200).send({ message: 'Notificación creada con exito' });
                    }
                });
            }
        });
    });
}

function experitationAlertNotification() {

}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    generateNotification
}