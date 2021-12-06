import express from "express";

const args = { mergeParams: true };
const userRouter = express.Router(args);

userRouter.route("/register").post(user.createUser);

// userRouter.route("/login").post(user.userLogin);

// userRouter.route("/logout").get(user.userLogout);

// userRouter.route("/users").get(user.getUser);

export { userRouter };
