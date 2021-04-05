var express = require('express')
var router = express.Router()

router.get('/signout' , (req , res) => {
    res.send("user signout")
})


router.get('/signin' , (req , res)=>{
    res.send("signin")
})

module.exports = router;