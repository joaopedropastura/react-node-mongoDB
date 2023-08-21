const express = require('express');
const router = express.Router();
const ProdutsController = require('../controllers/prodSportsController')


router
    .post('/', ProdutsController.CreateProd )
    .patch('/:id', ProdutsController.UpdateProdById)
    .get('/:id?', ProdutsController.getItens)
    .delete('/:id', ProdutsController.DeleteItem)


module.exports = router