
const User = require('../models/user')


exports.signup = (req , res) =>{
    // console.log("REQ BODY" , req.body);
    const user = new User(req.body);

    user.save( (err , data)=>{
        if(err){
            return res.status(400).json({
                err: "Not able save user in DB"
            })
        }
        res.json({
            name:user.name,
            email:user.email,
            

        });
    })

}





exports.signout = (req , res) =>{
    res.json({
        message: 'user signout!!'
    });
};


