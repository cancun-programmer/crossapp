'use strict';

const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    status: Boolean,
    member: String,
    message: String,
    type: String
});

const Notification = module.exports = mongoose.model('Notification', notificationSchema);

module.exports.getMembers = function(callback){
    Member.find({status: true}).sort({'_id':-1}).exec(callback);
}
module.exports.createNotification = function (newNotification, callback){
    newNotification.save(callback);
}
module.exports.getEmail = function(email, callback){
    Member.find({email: email},{email:1}).lean().exec(callback);
}
module.exports.updateMember = function (id, update, callback){
    Member.findOneAndUpdate({'_id': id}, update,{new: true}, callback);
}