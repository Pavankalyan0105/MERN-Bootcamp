const mongoose = require("mongoose")

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true,
    },
 
    lastName: {
        type:String,
        trim:true,
        maxlength:32,
    },

    email: {
        type:String,
        trim:true,
        unique:true,
        required:true,
    },

    userinfo:{ // User Description
        type:String , 
        trim:true
    },



    // TODO:

    password:{
        type:String,
        trim:true,
    },
    salt:String,

    role:{
        type: Number , //higher the number higher the role
        default:0,
    },

    purchases: {
        type:Array ,
        default:{},
    }
});


module.exports = mongoose.model("User",userSchema)



