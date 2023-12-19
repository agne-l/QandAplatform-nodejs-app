import mongoose from "mongoose";

const AnswerSchema = mongoose.Schema({
  id: { type: String, required: false },
  answer_text: { type: String, required: true },
  date: { type: Date, required: true },
  question_id: { type: String, required: true },
  gained_likes_number: { type: Number, required: false },
});

const AnswerModel = mongoose.model("Answer", AnswerSchema);

export default AnswerModel;
