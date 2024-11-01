const express = require('express');

let router = express.Router();

const AllUserContoller = require('../controllers/User/AllUserController')
const CreateUserController = require('../controllers/User/CreateUserController')

router.get('/users', AllUserContoller);
router.post('/users', CreateUserController);

module.exports = router;