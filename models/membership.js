'use strict';

const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    gymName : String,
    membershipType : String,
    startDate : Date,
    endDate: Date,
    price : Number,
    paymentType : String,
    memberID: mongoose.Types.ObjectId

});

const Membership = module.exports = mongoose.model('Membership', membershipSchema);

module.exports.getMemberships = function(memberID, callback){
    Membership.find({memberID: memberID}).sort({'_id':-1}).exec(callback);
}
module.exports.saveMembership = function (newMembership, callback){
    newMembership.save(callback);
}

module.exports.updateMembership = function (id, update, callback){
    Membership.findOneAndUpdate({'_id': id}, update, {new: true}, callback);
}