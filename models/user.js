'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    role: Number,
    username: String,
    password: String,
    status: Boolean
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function(callback){
    Member.find({status: true}).sort({'_id':-1}).exec(callback);
}
/*module.exports.saveMember = function (newMember, callback){
    newMember.save(callback);
}
module.exports.getEmail = function(email, callback){
    Member.find({email: email},{email:1}).lean().exec(callback);
}
module.exports.updateMember = function (id, update, callback){
    Member.findOneAndUpdate({'_id': id}, update,{new: true}, callback);
}*/