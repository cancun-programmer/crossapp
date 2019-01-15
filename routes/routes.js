'use strict';

const express = require('express');
const router = express.Router();
var memberController = require('../controllers/member');
var userController = require('../controllers/user');
var authController = require('../controllers/auth');
const membershipController = require('../controllers/membership');
const auth = require('../controllers/auth')


// Rutas Users
router.get('/users', userController.getUsers);
router.post('/user', userController.saveUser);

router.post('/signIn', authController.signIn);

// Rutas Members
router.get('/members', memberController.getMembers);
router.post('/member', memberController.saveMember);
router.put('/member/:id', memberController.updateMember);

// Rutas Memberships
router.get('/membershipsByMember/:id', membershipController.getMemberships);
router.post('/membershipSave', membershipController.saveMembership);
router.put('/membershipUpdate/:id', membershipController.updateMembership);

// Index Route
router.get('/', auth.ensureToken, (req, res) => {
    res.send('Endpoint invalido');
});

module.exports = router;