'use strict';

const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    boxName: String,
    membershipType: String,
    startDate: Date,
    endDate: Date,
    price: Number,
    paymentType: String
});

const memberSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    birthdate: String,
    sex: String,
    comments: String,
    email: String,
    cellphone: Number,
    homephone: Number,
    address: String,
    status: Boolean,
    picture: String,
    emergencyContact: String,
    relationship: String,
    contactEmail: String,
    contactCellPhone: Number,
    contactHomePhone: Number,
    medicalInformation: String,
    age: Number,
    memberships: [membershipSchema]
});

const Member = module.exports = mongoose.model('Member', memberSchema);

module.exports.getMembers = function(callback){
    Member.find({status: true}).sort({'_id':-1}).exec(callback);
}
module.exports.saveMember = function (newMember, callback){
    newMember.save(callback);
}
module.exports.getEmail = function(email, callback){
    Member.find({email: email},{email:1}).lean().exec(callback);
}
module.exports.updateMember = function (id, update, callback){
    Member.findOneAndUpdate({'_id': id}, update,{new: true}, callback);
}