import AnswerModel from "../models/answer.js";

const ADD_ANSWER = async (req, res) => {
  try {
    const answer = new AnswerModel({
      answer_text: req.body.answer_text,
      date: req.body.date,
    });

    const response = await answer.save();

    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const GET_ALL_ANSWERS = async (req, res) => {
  try {
    const answers = await AnswerModel.find();

    return res.status(200).json({ answers });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

export { ADD_ANSWER, GET_ALL_ANSWERS };
