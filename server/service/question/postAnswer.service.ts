import FilterTags from "../../models/filterTag.model";
import Questions from "../../models/question.model";
import { FilterTag } from "../../types/filterTags";
import { Question } from "../../types/question";

export const PostAnswer = async (
  question: Question,
  tag: FilterTag
): Promise<any> => {
  try {
    const questionObj = new Questions(question);
    questionObj.save((e, question) => {
      if (e) return [{ message: "Error occured" }, null];
      else {
        try {
          const filterTag = new FilterTags(tag);
          filterTag.save();
          return [null, { response: question }];
        } catch (err) {
          return [{ message: "Error occured" }, null];
        }
      }
    });
  } catch (e) {
    return [{ message: "Error occured" }, null];
  }
};
