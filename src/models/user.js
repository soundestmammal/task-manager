const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error("This was not a valid age");
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("This is not a valid email!");
            }
        }
    },
    password: {
        type: String,
        requried: true,
        minlength: 7,
        trim: true,
        lowercase: true,
        validate(value) {
            if(value.includes("password")) {
                throw new Error("Your password can not contain the word password...");
            }
        }
    }
});

module.exports = User