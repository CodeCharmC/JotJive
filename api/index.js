import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

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

const app = express();

app.use(express.json());

app.listen(3000, () => {
   console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((error, req, res, next) => {
   const statusCode = error.statusCode || 500;
   const message = error.message || "Internal Server Error";
   res.status(statusCode).json({
      success: false,
      statusCode,
      message
   });
});