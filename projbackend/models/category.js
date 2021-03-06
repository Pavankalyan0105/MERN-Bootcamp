const mongoose = require('mongoose');

const categorySchema = new categorySchema({
    name:{
        type: String , 
        trim: true ,
        required:true , 
        maxlength:32 , 
        unique:true,
    }
}, {timestamps: true }
);

module.exports = mongoose.model("Category" , categorySchema)

//Completed User Category Schema