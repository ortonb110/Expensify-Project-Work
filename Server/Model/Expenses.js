import mongoose from "mongoose";
import { Schema } from "mongoose";


const ExpensesSchema = new Schema({
    description: {
        type: String,
        required: [true, 'Please provide expense description.'],
        maxlength: 150,
    },
    amount: {
       type: Number,
       required: [true, 'Please enter amount!'],
    },
    receiver: {
        type: String,
        required: [true, "'Please enter receiver's name!"],
        maxlength: 50,
    },
    payment: {
        type: String,
        enum: ['Cash', 'Mobile Money', 'Online Payment'],
        default: 'Cash'
    },
    status: {
        type: String,
        enum: ['Paid', 'Pending'],
        default: 'Paid'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: [true, 'Please provide a user'],
        ref: 'User'
    }

}, {timestamps: true});

export default mongoose.model('Expense', ExpensesSchema)