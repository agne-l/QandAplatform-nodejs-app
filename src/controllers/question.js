import QuestionModel from "../models/question.js";

const ADD_QUESTION = async (req, res) => {
  try {
    const question = new QuestionModel({
      question_text: req.body.question_text,
      date: req.body.date,
    });

    question.id = question._id;

    const response = await question.save();

    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const GET_ALL_QUESTIONS = async (req, res) => {
  try {
    const questions = await QuestionModel.find();
    return res.status(200).json({ questions });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const UPDATE_QUESTION = async (req, res) => {
  try {
    const updatedQuestion = await QuestionModel.findOneAndUpdate(
      {
        id: req.params.id,
      },
      { question_text: req.body.question_text, date: req.body.date },
      { new: true }
    );
    return res.status(200).json({ updatedQuestion });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const DELETE_QUESTION = async (req, res) => {
  try {
    const deletedQuestion = await QuestionModel.findOneAndDelete({
      id: req.params.id,
    });
    return res.status(200).json({ deletedQuestion });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

export { ADD_QUESTION, GET_ALL_QUESTIONS, UPDATE_QUESTION, DELETE_QUESTION };
