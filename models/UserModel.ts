import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: {type: String, enum: ["admin", "user"], default: "user"}
  });



const User = mongoose.models.User ||mongoose.model("User", userSchema);


export default User;
  