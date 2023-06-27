import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";
import validator from "validator";

const User = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name!'],
        minlength: 3,
        maxlength: 20,
        trim: true
    }, 
    email: {
        type: String,
        required: [true, 'Please provide an email!'],
        unique: true,
        validate:{
            validator: validator.isEmail,
            msg: "Please provide a valid email",
        },

        
    }, 
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        select: false,
        minlength: 6,
        trim: true,
    }, 
    location: {
        type: String,
        default: 'My City',
        maxlength: 20,
        trim: true,
    },
    lastName: {
        type: String,
        default: 'lastName',
        maxlength: 20,
        trim: true,
        minlength: 3
    },
})

export default mongoose.model('User', User)
