import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  question_text: { type: String, required: true },
  date: { type: String, required: true },
  id: { type: String, required: false },
  user_id: { type: String, required: false },
});

const QuestionModel = mongoose.model("Question", QuestionSchema);

export default QuestionModel;
