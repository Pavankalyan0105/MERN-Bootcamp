const express = require('express');
const router = express.Router();

router.get('/home' ,(req , res)=>{
    res.send("Home Dashboard");
});



router.get('/admin' , (req , res)=>{
    res.send("Admin Dashboard");
})

module.exports = router;