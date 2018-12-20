'use strict';

const User = require('../models/user');

function signIn(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'Usuario no encontrado' });
        }  
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                console.log(isMatch);
                return res.json({ success: true, msg: 'Password correcto' });
            } else {
                return res.json({ success: false, msg: 'Password incorrecto' });
            }
        });
    });
}


module.exports = {
    signIn
}