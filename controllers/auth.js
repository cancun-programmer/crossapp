'use strict';

const User = require('../models/user');
const Jwt = require('jsonwebtoken');
const Secret = require('../config/db')

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
                //console.log(isMatch);
                const token = Jwt.sign(user.toJSON(), Secret.secret, {
                    expiresIn: '1d'
                });
                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        role: user.role,
                        username: user.username,
                        status: user.status
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Password incorrecto' });
            }
        });
    });
}


module.exports = {
    signIn
}