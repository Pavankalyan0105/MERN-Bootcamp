const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type:string , 
        required:true , 
        maxLength:32 ,
        trim:true 
    } ,
    lastname:{
        type:String , 
        maxLength:32 , 
        trim:true
    } , 
    email:{
        type:email,
        require:true , 
        unique:true,
        maxLength:32 
    }



})

userSchema.method = {
    securePassword : function(plainpassword) {
        if(plainpassword == "") return ;

        
    }
}