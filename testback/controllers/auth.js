
const User = require('../models/user');

exports.signup = (req , res)=>{
    
    const user = new User(req.body); //populating the new user with the request data(as it is post)

    //return error or user

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

};

exports.signin = (req , res)=>{
    res.send("Im in signup page");
};

