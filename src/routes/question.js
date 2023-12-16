import express from "express";
import {
  ADD_QUESTION,
  GET_ALL_QUESTIONS,
  UPDATE_QUESTION,
  DELETE_QUESTION,
} from "../controllers/question.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/", auth, ADD_QUESTION);
router.get("/", GET_ALL_QUESTIONS);
router.put("/:id", auth, UPDATE_QUESTION);
router.delete("/:id", auth, DELETE_QUESTION);

export default router;
