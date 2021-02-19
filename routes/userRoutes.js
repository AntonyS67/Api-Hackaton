const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/',userController.getUsers);
router.post('/',userController.create);
router.post('/signin',userController.signinUser);

module.exports = router;