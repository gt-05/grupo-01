const express = require('express');

let router = express.Router();
const AllProductsController = require('../controllers/Products/AllProductsController')
const CreateController = require('../controllers/Products/CreateController')
const UpdateController = require('../controllers/Products/UpdateController')
const DeleteController = require('../controllers/Products/DeleteController')

router.get('/products', AllProductsController);
router.post('/products', CreateController);
router.put('/products/:id', UpdateController);
router.delete('/products/:id', DeleteController);

module.exports = router;