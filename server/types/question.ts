import moment from "moment";

export interface Question extends Document {
  question: string;
  created_date: string;
  tag: string;
  answers: Array<Object>;
}
