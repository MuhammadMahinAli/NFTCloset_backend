import cors from "cors";
import express from "express";
import httpStatus from "http-status";
import router from "./app/routes/index.js";
import {globalErrorHandler} from "./app/middlewars/gloalErrorHandler.js";

const app = express();

//
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

////use route
app.use("/api/v1", router);
//
app.get("/", (req, res) => {
  res.send("Server is Listening..");
});

//global error handle
app.use(globalErrorHandler);
//handle not found
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found",
    errorMessgaes: [{path: req.originalUrl, message: "Api not found"}],
  });
  next();
});
export default app;
