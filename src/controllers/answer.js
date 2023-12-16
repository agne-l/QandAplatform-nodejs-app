import AnswerModel from "../models/answer.js";

const ADD_ANSWER = async (req, res) => {
  try {
    const answer = new AnswerModel({
      answer_text: req.body.answer_text,
      date: req.body.date,
      question_id: req.body.question_id,
    });

    answer.id = answer._id;

    const response = await answer.save();

    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const GET_ALL_ANSWERS = async (req, res) => {
  try {
    const answers = await AnswerModel.find({ question_id: req.params.id });

    return res.status(200).json({ answers });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const EDIT_ANSWER = async (req, res) => {
  try {
    const editedAnswer = await AnswerModel.findOneAndUpdate(
      { id: req.params.id },
      { answer_text: req.body.answer_text, date: req.body.date },
      { new: true }
    );

    return res.status(200).json({ editedAnswer });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const DELETE_ANSWER = async (req, res) => {
  try {
    const deletedAnswer = await AnswerModel.findOneAndDelete({
      id: req.params.id,
    });
    return res.status(200).json({ deletedAnswer });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

export { ADD_ANSWER, GET_ALL_ANSWERS, EDIT_ANSWER, DELETE_ANSWER };
