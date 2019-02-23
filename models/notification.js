'use strict';

const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    readStatus: Boolean,
    memberID: String,
    message: String,
    notificationType: String,
    notificationDate: Date
});

const Notification = module.exports = mongoose.model('Notification', notificationSchema);

module.exports.getNotifications = function (callback) {
    Notification.find({}).sort({ notificationDate: -1 }).exec(callback);
}
module.exports.createNotification = function (newNotification, callback) {
    newNotification.save(callback);
}
module.exports.getEmail = function (email, callback) {
    Notification.find({ email: email }, { email: 1 }).lean().exec(callback);
}
module.exports.updateNotification = function (id, update, callback) {
    Notification.findOneAndUpdate({ '_id': id }, update, { new: true }, callback);
}