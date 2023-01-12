
import mongoose from "mongoose";

const filmModels = new mongoose.Schema({
    filmname: {type: String, unique: true},
    description: String,
    images: String,
})

export const filmModel = mongoose.model('films', filmModels);
