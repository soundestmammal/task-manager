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
            unique: true,
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
            validate(value) {
                if(value.includes("password")) {
                    throw new Error("Your password can not contain the word password...");
                }
            }
        }
});

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    
    const hashed = await bcrypt.hash(password, 8);

    if(!user) {
        throw new Error("Unable to log in!");
    }
    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Unable to log in!");
    }
 
    return user;
}

// Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    const user = this;

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

const User = new mongoose.model('User', userSchema);



module.exports = User;

