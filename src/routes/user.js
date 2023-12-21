import express from "express";
import {
  REGISTER,
  LOGIN,
  GET_ALL_USERS,
  GET_USER_BY_ID,
} from "../controllers/user.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", REGISTER);
router.post("/login", LOGIN);
router.get("/", GET_ALL_USERS);
router.get("/:id", auth, GET_USER_BY_ID);

export default router;
