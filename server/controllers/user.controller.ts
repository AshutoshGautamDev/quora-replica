import express from "express";
import { createUser } from "../service/user/createUser.service";

export default class UserController {
  static async register(req: express.Request, res: express.Response) {
    try {
      const [error, response] = await createUser(req, res);
      if (error) {
        res.status(500).send({ error: error });
      } else {
        res.status(200).send({ response: response });
      }
    } catch (e) {
      res.status(500).send({ error: "Error occured" });
    }
  }
}
