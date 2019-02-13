'use strict';

const Membership = require('../models/membership');
const Notification = require('../models/notification');

//Metodo que ejecuta los metodos de notificaciones
function generateNotification(req, res) {
    var todayDate = new Date();
    //var 
    expiredMembershipNotification(todayDate);
}


/**
 4 tipos de notificaciones.
 Vencimiento proximo - alert
 Vencido - expired
 */

function expiredMembershipNotification(todayDate) {
    Membership.getMemberships((err, memberships) => {
        memberships.forEach(element => {
            if ((element.endDate < todayDate) && (element.membershipStatus == true)) {
                let notification = new Notification({
                    readStatus: 0,
                    memberID: element.memberID,
                    message: 'La membresía de ' + element.memberName + ' está vencida',
                    notificationType: 'expired',
                    notificationDate: todayDate
                });
                Notification.createNotification(notification, (err) => {
                    if (err) {
                        console.log('Error al guardar la notificación ' + err);
                    } else {
                        console.log('Notificación creada con exito ' + notification.message);
                        var update = { membershipStatus: false }
                        Membership.updateMembership(element._id, update, (err, membershipUpdate) => {
                            if (err) {
                                console.log('Error al actualizar los datos de la membresia', err);
                            } else {
                                console.log('La membresia ' + membershipUpdate.membershipType + '  fue actualizada');
                            }
                        });
                    }
                });

            } else {

            }
        });
    });
}

//function experitationAlertNotification() {

//}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    generateNotification
}