import express from "express";
import {
  ADD_QUESTION,
  GET_ALL_QUESTIONS,
  UPDATE_QUESTION,
  DELETE_QUESTION,
} from "../controllers/question.js";

const router = express.Router();

router.post("/questions", ADD_QUESTION);
router.get("/questions", GET_ALL_QUESTIONS);
router.put("/questions/:id", UPDATE_QUESTION);
router.delete("/questions/:id", DELETE_QUESTION);

export default router;
