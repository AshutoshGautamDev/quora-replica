import express from "express";
import ExampleService from "../service/example.service";

export default class ExampleController {
  static async exampleMethod(req: express.Request, res: express.Response) {
    const [error, response] = await ExampleService();
    if (error) {
      res.status(500).send({ error: error });
    } else {
      res.status(200).send({ response: response });
    }
  }
}
