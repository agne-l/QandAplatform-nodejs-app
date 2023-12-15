import express from "express";
import {
  ADD_QUESTION,
  GET_ALL_QUESTIONS,
  DELETE_QUESTION,
} from "../controllers/question.js";

const router = express.Router();

router.post("/questions", ADD_QUESTION);
router.get("/questions", GET_ALL_QUESTIONS);
router.delete("/questions/:id", DELETE_QUESTION);

export default router;
