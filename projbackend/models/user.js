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

    encry_password:{
        type:String,
        required:true,
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


userSchema.method = {
    securePassword : function(plainpassword){
        if(!plainpassword)  return "";
        try{
            return createHmac('sha256', this.salt)
               .update(plainpassword)
               .digest('hex');

        }catch(err){
            return "";
        } 
    }
}

module.exports = mongoose.model("User",userSchema)



