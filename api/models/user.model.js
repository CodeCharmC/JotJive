import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   profilePicture: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_1280.png",
      
   },
}, { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;