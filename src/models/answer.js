import mongoose from "mongoose";

const AnswerSchema = mongoose.Schema({
  answer_text: { type: String, required: true },
  date: { type: String, required: true },
  id: { type: String, required: false },
  question_id: { type: String, required: false },
  gained_likes_number: { type: Number, required: false },
});

const AnswerModel = mongoose.model("Answer", AnswerSchema);

export default AnswerModel;
