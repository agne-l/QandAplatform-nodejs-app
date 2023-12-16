import express from "express";
import {
  ADD_ANSWER,
  GET_ALL_ANSWERS,
  EDIT_ANSWER,
  DELETE_ANSWER,
} from "../controllers/answer.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/questions/:id", auth, ADD_ANSWER);
router.get("/questions/:id", GET_ALL_ANSWERS);
router.put("/:id", auth, EDIT_ANSWER);
router.delete("/:id", auth, DELETE_ANSWER);

export default router;
