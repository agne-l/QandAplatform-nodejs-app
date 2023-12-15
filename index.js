import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import answerRouter from "./src/routes/answer.js";
import questionRouter from "./src/routes/question.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(answerRouter);
app.use(questionRouter);

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`app started on PORT ${process.env.PORT}`);
});
