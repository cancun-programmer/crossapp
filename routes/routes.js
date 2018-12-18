'use strict';

const express = require('express');
const router = express.Router();
//var oficioController = require('../controllers/oficio');
var memberController = require('../controllers/member');

// Rutas oficios
/*router.get('/oficios', oficioController.getOficios);
router.get('/oficio/:id', oficioController.getOficio);
router.post('/oficio', oficioController.saveOficio);
router.put('/oficio/:id', oficioController.updateOficio);
router.delete('/oficio/:id', oficioController.deleteOficio);*/

// Rutas Members
router.get('/members', memberController.getMembers);
router.post('/member', memberController.saveMember);
router.put('/member/:id', memberController.updateMember);
//router.put('/usuario/:id', oficioController.updateUsuario);

// Index Route
router.get('/', (req, res) => {
    res.send('Endpoint invalido');
});

module.exports = router;