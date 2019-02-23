'use strict';

const Membership = require('../models/membership');
const Notification = require('../models/notification');

//Metodo que ejecuta los metodos de notificaciones
function generateNotification(req, res) {
    var todayDate = new Date();
    expiredMembershipNotification(todayDate);
    experitationAlertNotification(todayDate);
}


/**
 2 tipos de notificaciones.
 Vencimiento proximo 2 dias antes - alert
 Vencido - expired
 */

function expiredMembershipNotification(todayDate) {
    var promise = new Promise((resolve, reject) => {
        Membership.getMemberships((err, memberships) => {
            if (err) {
                //Si hay error no hacer nada
                reject();
            } else {
                resolve(memberships);
            }
        });
    }).then((memberships) => {
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
                        var update = { membershipStatus: false }
                        Membership.updateMembership(element._id, update, (err, membershipUpdate) => {
                            //console.log(membershipUpdate);
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
    }).catch((err) => {
        console.error('ERROR: ' + err);
    });
}



function experitationAlertNotification(todayDate) {
    todayDate.setUTCHours(0, 0, 0, 0);
    var promise = new Promise((resolve, reject) => {
        Membership.getMemberships((err, memberships) => {
            if (err) {
                //Si hay error no hacer nada
                reject();
            } else {
                resolve(memberships);
            }
        });
    }).then((memberships) => {
        memberships.forEach(element => {
            element.endDate.setDate(element.endDate.getDate() - 2);
            //console.log(element.endDate.getTime());
            //console.log(todayDate.getTime());
            if (element.endDate.getTime() == todayDate.getTime()) {
                console.log('La membresía vencerá en 2 días');
            } else {
                console.log('No hay notificiacion');
            }
        });

    }).catch((err) => {
        console.error('ERROR: ' + err);
    });

}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    generateNotification
}