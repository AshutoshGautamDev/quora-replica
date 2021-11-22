import { model, Schema, Model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import { User } from "../types/user";

const UserSchema: Schema<User> = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String },
});

UserSchema.plugin(passportLocalMongoose, {
  selectFields: "username password name",
});

const Users: Model<User> = model("Users", UserSchema);
export default Users;
