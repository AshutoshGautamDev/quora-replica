import { model, Schema, Model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import { User } from "../types/user";

const UserSchema: Schema<any> = new Schema({
  username: { type: String },
  password: { type: String},
  name: { type: String },
  email: { type: String },
});

UserSchema.plugin(passportLocalMongoose, {
  selectFields: "username password name email",
});

const Users: Model<User> = model("Users", UserSchema, "Users");
export default Users;
