import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  question_text: { type: String, required: true },
  date: { type: Date, required: true },
  id: { type: String, required: true },
  user_id: { type: String, required: false },
});

const QuestionModel = mongoose.model("Question", QuestionSchema);

export default QuestionModel;
