var express = require('express')
var router = express.Router()

const {signout} = require("../controllers/auth")

router.get('/signout' , signout)


router.get('/signin' , (req , res)=>{
    res.send("signin")
})

module.exports = router;