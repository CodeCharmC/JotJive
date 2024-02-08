import express from "express";
import { createComment } from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";


const router = express.Router();

router.post("/createcomment", verifyToken, createComment);


export default router;