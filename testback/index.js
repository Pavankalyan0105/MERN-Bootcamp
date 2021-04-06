const express = require("express")

const app = express()

const port = 5000

app.get('/' , (req , res) => {
    return res.send("Hello there Its Home routte");
})

app.get('/signup' , (req , res)=> {
    return res.send("You are in Signup route");
})


app.get('/feed' , (req , res) => {
    res.send("No feed uploaded yet....");
})
app.listen(port , () => {
    console.log("Server is up and running...");
})





const isloggedIn = (req , res , next)=>{
    console.log("isLogged in ");
    next();
}

const isAdmin = (req,res,next)=>{
        console.log("isAdmin");
        next();
}

const admin = (req ,res)=>{
        console.log("welcome admin ")
        return res.send("You are an admin");
}




app.get('/admin' , isloggedIn , isAdmin , admin);