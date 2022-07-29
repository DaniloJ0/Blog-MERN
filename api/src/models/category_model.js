import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
    },
},{timestamps: true});

export default model("Category", categorySchema);
