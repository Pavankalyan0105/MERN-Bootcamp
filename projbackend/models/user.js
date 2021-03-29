const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: {
            type    :  String,
            required :  true,
            maxlength:  32,
            trim    :   true
        },

    lastname:{
        type : String,
        maxlength:32,
        trim:true
    },
    email:{
        type: String,
        trim:true , 
        required: true,
        unique: true   
    },
    userinfo:{
        type:String , 
        trim: true,
    },
    ecnry_password:{
        type: String,
        required:true,
    },
    salt : String ,
    role:{
        type : Number , 
        default:0,
    },
    purchases:{
        type:Array,
        default:[]
    }

})

userSchema.method = {
   securepassword: function(plainpassword){
        if(!plainpassword)  return ""
        try{
            return createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex');
        }
        catch(err)  {
            return "";
        }
    }
}


module.exports = mongoose.model("User" , userSchema)