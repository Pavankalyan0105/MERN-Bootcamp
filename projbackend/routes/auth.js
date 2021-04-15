var express = require('express')
var router = express.Router()

const {signout , signup } = require("../controllers/auth")

// router.get('/signout' , signout)


router.post('/signup'  ,signup)





router.get('/signout' ,signout)




module.exports = router;