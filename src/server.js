import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js";
import {recycleAutomation} from "./utils/automation.js";

const port = config.port || 5000;
let server;
//uncaught exception handle
process.on("uncaughtException", (err) => {
  console.log("uncaught exception", err);
  process.exit(1);
});
//database connection
export const db = async () => {
  try {
    await mongoose.connect(config.database_url);

    console.log("🚀 Database connected successfully");
    server = app.listen(port, () => {
      console.log(` App listening on port ${port}`);
      //for deleting old products after 30 days
      recycleAutomation();
    });
  } catch (err) {
    console.log("Failed to connect database", err);
  }
  //unhandled rejection handle
  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log("unhandled rejection", error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};

db();
