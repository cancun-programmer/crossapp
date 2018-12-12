'use strict';

const express = require('express');
const router = express.Router();
//var oficioController = require('../controllers/oficio');
var usuarioController = require('../controllers/usuario');

// Rutas oficios
/*router.get('/oficios', oficioController.getOficios);
router.get('/oficio/:id', oficioController.getOficio);
router.post('/oficio', oficioController.saveOficio);
router.put('/oficio/:id', oficioController.updateOficio);
router.delete('/oficio/:id', oficioController.deleteOficio);*/

// Rutas usuarios
//router.get('/usuario/:email', usuarioController.getEmail);
router.post('/usuario', usuarioController.saveUsuario);
//router.put('/usuario/:id', oficioController.updateUsuario);

// Index Route
router.get('/', (req, res) => {
    res.send('Endpoint invalido');
});

module.exports = router;