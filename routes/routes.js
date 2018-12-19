'use strict';

const express = require('express');
const router = express.Router();
var memberController = require('../controllers/member');
var userController = require('../controllers/user');

// Rutas Users
router.get('/users', userController.getUsers);
router.post('/user', userController.saveUser);
router.get('/login', userController.getUsers);

// Rutas Members
router.get('/members', memberController.getMembers);
router.post('/member', memberController.saveMember);
router.put('/member/:id', memberController.updateMember);

// Index Route
router.get('/', (req, res) => {
    res.send('Endpoint invalido');
});

module.exports = router;