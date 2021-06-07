const express = require('express')

const app = express()

const authRoutes = require("./routes/auth.js")

const PORT = 9090;



app.use("/api" , authRoutes)


app.listen(PORT , ()=>{
    console.log("yaaa Server is up and running .... ");
});