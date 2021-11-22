import { model, Schema, Model } from "mongoose";
import { FilterTag } from "../types/filterTags";

const FilterTagsSchema = new Schema({
  tag: {
    type: String,
    default: "General",
  },
});

const FilterTags: Model<FilterTag> = model("FilterTags", FilterTagsSchema);
export default FilterTags;
