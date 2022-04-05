const express = require('express');
const router = express.Router();
const axios = require('axios');

// Importar controladores
const ProductController = require('../app/controllers/ProductController');
const UserController = require('../app/controllers/UserController');


// Products
 router.post('/', ProductController.create);
 router.get('/getByName/:name', ProductController.showByKeyWord);
 router.get('/', ProductController.sowAll);
 router.get('/:id', ProductController.showById);
 router.patch('/:id', ProductController.update);
 router.delete('/:id', ProductController.delete);
 router.post('/createUser', UserController.create);
 router.get('/users/pendientes', UserController.showUsers);
 router.get('/test/test', (req, res)=>{ 
	res.json({"message": "aplicacion desplegada"});
 });


module.exports = router;
