import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
    originURL: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true
    }
})

const URLModel = mongoose.model('URLModel', URLSchema)

export {URLModel}