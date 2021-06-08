const express = require('express')

const app = express()

const authRoutes = require("./routes/auth.js")

const bodyParser = require('body-parser');

const PORT = 9090;



app.use(bodyParser.json());
app.use("/api" , authRoutes);


app.listen(PORT , ()=>{
    console.log("yaaa Server is up and running .... ");
});