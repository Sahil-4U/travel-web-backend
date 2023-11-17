import mongoose from "mongoose";

const UserSignupSchema = mongoose.Schema({
    username: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    }
})

export const User = mongoose.model('User', UserSignupSchema);