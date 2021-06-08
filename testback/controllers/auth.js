

exports.signin = (req , res)=>{
    console.log("REQ BODY" , req.body);
    res.json(
        {
            message:"sign in route works"
        }
    );
};

exports.signup = (req , res)=>{
    res.send("Im in signup page");
};

