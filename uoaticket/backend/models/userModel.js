import mongoose from "mongoose";

const user = new mongoose.Schema({
    userName: {type: String, unique: true},
    password: String,
})

export const userModel = mongoose.model('users', user);