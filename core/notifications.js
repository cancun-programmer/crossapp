'use strict';

const Membership = require('../models/membership');
const Notification = require('../models/notification');

//Metodo que trae todos los Members activos
function generateNotification(req, res) {
    expiredMembership();
}


/**
 4 tipos de notificaciones.
 Vencimiento proximo
 Vencido
 */

function expiredMembership() {
    var datetime = new Date();
    Membership.getMemberships((err, memberships) => {
        //console.log(element.endDate);
        memberships.forEach(element => {
            if (element.endDate < datetime) {
                console.log(element.endDate);
                let notification = new Notification({
                    readStatus: 0,
                    member: String,
                    message: String,
                    notificationType: 'expired',
                    notificationDate: datetime
                });
                Notification.createNotification(notification, (err, newNotification) => {

                });
            }
        });
    });
    //console.log(datetime);
}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    generateNotification
}