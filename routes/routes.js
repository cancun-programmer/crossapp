'use strict';

const express = require('express');
const router = express.Router();
var memberController = require('../controllers/member');
var userController = require('../controllers/user');
var authController = require('../controllers/auth');
const membershipController = require('../controllers/membership');
const notificationController = require('../controllers/notification');
const auth = require('../controllers/auth')

// Rutas Users
router.get('/getUsers', userController.getUsers);
router.post('/saveUser', userController.saveUser);

//Ruta Login
router.post('/signIn', authController.signIn);

// Rutas Members
router.get('/getMembers', memberController.getMembers);
router.post('/saveMember', memberController.saveMember);
router.put('/memberUpdate/:id', memberController.updateMember);

// Rutas Memberships
router.get('/membershipsByMember/:id', membershipController.getMemberships);
router.post('/membershipSave', membershipController.saveMembership);
router.put('/membershipUpdate/:id', membershipController.updateMembership);

// Ruta Notificaciones
router.get('/getNotifications',  notificationController.getNotifications);

// Index Route
router.get('/', auth.ensureToken, (req, res) => {
    res.send('Endpoint invalido');
});



module.exports = router;