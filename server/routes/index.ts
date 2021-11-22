import express from "express";
import apiRoutes from "./api";

export const initRoutes = (app) => {
  app.use(apiRoutes);

  app.get("/healthcheck", (req: express.Request, res: express.Response) => {
    console.log("normal");
    res.sendStatus(200);
  });
};
