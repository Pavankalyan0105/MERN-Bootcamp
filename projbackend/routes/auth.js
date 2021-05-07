var express = require('express')
const { check, validationResult } = require('express-validator');
var router = express.Router()

const {signout , signup } = require("../controllers/auth")

// router.get('/signout' , signout)


router.post('/signup'  ,[
    check("name").isLength({min : 3}).withMessage('Name is mandatory') ,
    check('email').isEmail().withMessage('Email is required') ,
    check("password").isLength({min : 8}).withMessage('must be at  5 chars long'),
] , signup)





router.get('/signout' ,signout)




module.exports = router;