import moment from "moment";
import { model, Schema, Model } from "mongoose";
import { Question } from "../types/question";

const QuestionSchema: Schema<Question> = new Schema({
  question: { type: String },
  created_date: {
    type: String,
    required: true,
    default: moment().format("DD/MM/YYYY"),
  },
  tag: { type: String, default: "General" },
  answers: [
    {
      name: { type: String },
      answer: { type: String },
      created_date: { type: Date, default: Date.now },
    },
  ],
});

const Questions: Model<Question> = model("Questions", QuestionSchema);
export default Questions;
