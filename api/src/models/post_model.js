import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const postSchema = new Schema({
   title:{
    type:String,
    required: true,
    unique: true,
   },
   desc:{
    type:String,
    required: true,
   },
   photo:{
    type:String,
   },
   username:{
    type:String,
    required: true,
   },
   categoris:{
    type:Array,
    required: false
   }
},{timestamps: true});

export default model("Post", postSchema);
