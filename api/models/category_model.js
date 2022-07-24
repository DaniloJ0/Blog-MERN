import {model, Schema} from 'mongoose'

const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
    },
},{timestamps: true});

export default model("Category", categorySchema);
