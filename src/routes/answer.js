import express from "express";
import { ADD_ANSWER, GET_ALL_ANSWERS } from "../controllers/answer.js";

const router = express.Router();

router.post("/answers", ADD_ANSWER);
router.get("/answers", GET_ALL_ANSWERS);

export default router;
