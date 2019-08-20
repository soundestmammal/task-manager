const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
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

userSchema.pre('save', async function(next) {
    const user = this;

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

const User = new mongoose.model('User', userSchema);



module.exports = User;

