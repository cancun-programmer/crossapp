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
 4 tipos de notificaciones.
 Vencimiento proximo - alert
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
    var alertDate = new Date();
    alertDate.setDate(alertDate.getDate() - 2);
    console.log(alertDate);
    console.log(todayDate);

     if(alertDate < todayDate ){

     }
}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    generateNotification
}