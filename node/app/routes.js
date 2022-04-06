const express = require('express');
const router = express.Router();

// Importar controladores
const InfoController = require('../app/controllers/InfoController');

// rutas
 router.get('/version', InfoController.version);

module.exports = router;
