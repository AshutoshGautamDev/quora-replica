import express from "express";
import { initRoutes } from "./routes";
import mongoose from "mongoose";
import config from "./config";
import cors from "cors";

const mongodb = config.get("mongodb");

const app = express();
const port = config.get("port");
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // For legacy browser support
};

// Allow all routes to access
app.use(cors(corsOptions));

// middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Initialize modules server routes
initRoutes(app);

// Connecting with database

mongoose
  .connect(mongodb)
  .then((result) => {
    const server = app.listen(port, () => {
      console.log(`Started ${config.get("app.name")}`);
      console.log(`server is listening on ${port}, env ${config.get("env")}`);
    });
    process.on("SIGTERM", () => {
      console.log("SIGTERM signal received: closing HTTP server");
      server.close(() => {
        console.log("HTTP server closed");
      });
    });
  })
  .catch((error) => {
    console.log(`Error in database connection`);
  });
