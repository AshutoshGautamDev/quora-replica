import express from "express";
import Users from "../../models/user.model";
import { User } from "../../types/user";
import passport from "passport";

export const createUser = async (
  req: express.Request,
  res: express.Response
): Promise<any[]> => {
  const user: any = req.body;
  try {
    Users.register(
      new Users({
        username: user.username,
        name: user.name,
        email: user.email,
      }),
      user.password,
      function (err, user) {
        if (err) {
          console.log(err);
          return res.json(err);
        }

        passport.authenticate("local")(req, res, function () {
          res.json(user);
        });
      }
    );
  } catch (e) {
    return [{ message: "Errror occured while creating user" }, null];
  }
};
