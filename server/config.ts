import convict from "convict";

const config = convict({
  app: {
    name: {
      default: "Quora Replica",
      doc: "Quora Replica",
      format: String,
    },
  },
  port: {
    default: 4000,
    doc: "The port to bind.",
    env: "PORT",
    format: Number,
  },
  mongodb: {
    default: "mongodb://127.0.0.1/quora-replica",
    doc: "The mongodb to bind.",
    format: String,
  },
  env: {
    default: "development",
    doc: "The application environment.",
    env: "NODE_ENV",
    format: ["production", "development", "staging"],
  },
});

config.validate({ allowed: "strict" });

export default config;
