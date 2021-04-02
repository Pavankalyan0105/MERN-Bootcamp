const mongoose = require("mongoose")
const crypto   = require('crypto')
const { v4: uuidv4 } = require('uuid');


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
} , {timestamps: true });



userSchema.virtual("password")
    .set(function(password){
        this._password = password;
        this.salt = uuidv4();
        this.encry_password = this.securePassword(password);
    })
    .get(function(){
        return this._password
    })



userSchema.method = {

    authenticate: function(){
        return this.securePassword(plainpassword) === this.encry_password
    },

    securePassword : function(plainpassword){
        if(!plainpassword)  return "";
        try{
            return crypto.createHmac('sha256', this.salt)
               .update(plainpassword)
               .digest('hex');

        }catch(err){
            return "";
        } 
    }
}

module.exports = mongoose.model("User",userSchema)



