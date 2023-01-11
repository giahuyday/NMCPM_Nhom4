
import mongoose from "mongoose";

const filmModels = new mongoose.Schema({
    filmname: {type: String, unique: true},
    images: String,
    description: String,
})

export const filmModel = mongoose.model('films', filmModels);
