import mongoose from "mongoose";

// export const connect = async () => {
//     await mongoose
//     .connect(process.env.MONGO_URI)
//     .then(console.log("Connected to DB Mongo"))
//     .catch(err => console.log(err));
// }

export const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error(error);
    }
  };