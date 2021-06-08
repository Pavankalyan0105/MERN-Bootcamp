const express = require('express');
const router = express.Router();
const {signin, signup} = require('../controllers/auth');


router.post('/signin' , signin);

router.get('/signup' , signup);

module.exports = router;