'use strict';

const express = require('express');
const router = express.Router();
const memberController = require('../controllers/member');
const userController = require('../controllers/user');
const authController = require('../controllers/auth');
const membershipController = require('../controllers/membership');
const notificationController = require('../controllers/notification');
const paymentController = require('../controllers/payment');
const auth = require('../controllers/auth');

// Rutas Users
router.get('/getUsers', userController.getUsers);
router.post('/saveUser', userController.saveUser);

//Ruta Login
router.post('/signIn', authController.signIn);

// Rutas Members
router.get('/getMembers', memberController.getMembers);
router.post('/saveMember', memberController.saveMember);
router.put('/updateMember/:id', memberController.updateMember);

// Rutas Memberships
router.get('/getMembershipsByMember/:id', membershipController.getMemberships);
router.post('/saveMembership', membershipController.saveMembership);
router.put('/updateMembership/:id', membershipController.updateMembership);

// Ruta Notificaciones
router.get('/getNotifications',  notificationController.getNotifications);

// Rutas Payments
router.get('/getPaymentsByMembership/:id', paymentController.getPaymentsByMembership);
router.post('/savePayment', paymentController.savePayment);
router.put('/updatePayment/:id', paymentController.updatePayment);

// Index Route
router.get('/', auth.ensureToken, (req, res) => {
    res.send('Endpoint invalido');
});



module.exports = router;