const mongoose = require('mongoose');
const validate = require('validator')
const kodoContactSchema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
            validate(val){
             if(validate.isEmail(val)){
                return true;
             }
             else{
                throw new Error('Email is not Valid')
             }
        
        }
    },

    phone:{
        type:String,
        required:true,
        unique:true
    },

    message:{
        type:String,
        required:true,
    }
});


const kodoModel = new mongoose.model('kodocontact', kodoContactSchema);



module.exports = kodoModel;