'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: String,
    role: Number,
    username: String,
    password: String,
    status: Boolean
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function (callback) {
    User.find({}).sort({ '_id': -1 }).exec(callback);
}
module.exports.getUser = function (id, callback) {
    User.findOne({ '_id': id }).exec(callback);
}
module.exports.saveUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            // Store hash in your password DB.
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
module.exports.comparePassword = function (password, hash, callback) {
    bcrypt.compare(password, hash, function (err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}
