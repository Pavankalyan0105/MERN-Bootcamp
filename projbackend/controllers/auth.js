
const User = require('../models/user')
const { check, validationResult } = require('express-validator');



exports.signup = (req , res) =>{


    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            error : errors.array()[0].param + " " + errors.array()[0].msg,
        });
    }   
    
    
    // console.log("REQ BODY" , req.body);
    const user = new User(req.body);

    user.save( (err , user)=>{
        if(err){
            return res.status(400).json({
                err: "Not able to save user"
            })
        }

            res.json({
                "name": user.name,
                "email": user.email    
        })
    });
}





exports.signout = (req , res) =>{
    res.json({
        message: 'user signout!!'
    });
};


