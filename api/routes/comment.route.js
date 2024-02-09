import express from "express";
import { createComment, getPostComments, likeComment, hateComment } from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";


const router = express.Router();

router.post("/createcomment", verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/hateComment/:commentId', verifyToken, hateComment);


export default router;