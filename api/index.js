import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import cookieParser from "cookie-parser";
import commentRoutes from "./routes/comment.route.js";
import path from "path";

dotenv.config();

mongoose
   .connect(process.env.MONGO_URI)
   .then(() => {
      console.log("Connected to MongoDB");
   })
   .catch((err) => {
      console.log("Error connecting to MongoDB");
   }
);
const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
   console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
})

app.use((error, req, res, next) => {
   const statusCode = error.statusCode || 500;
   const message = error.message || "Internal Server Error";
   res.status(statusCode).json({
      success: false,
      statusCode,
      message
   });
});