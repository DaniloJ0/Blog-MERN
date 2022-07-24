import {model, Schema} from 'mongoose'

const userSchema = new Schema({
    username: {
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
        default: ""
    }
},{timestamps: true}
);

export default model("User", userSchema);
