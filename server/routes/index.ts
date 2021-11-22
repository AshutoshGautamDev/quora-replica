import express from "express";

export const initRoutes = (app) => {
  // app.use(apiRoutes);
  // app.use(initChannelAdvisorRoutes);

  app.get("/healthcheck", (req: express.Request, res: express.Response) => {
    console.log("normal");
    res.sendStatus(200);
  });
};
