import express from "express";
import {createRecycle, deleteRecycle, getAllRecycle, getSingleRecycle, updateRecycleStatus} from "./recycle.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createRecycleZodSchema} from "./recycle.validation.js";

const router = express.Router();

router.post("/", validateRequest(createRecycleZodSchema), createRecycle);
// router.post("/deleteProduct", validateRequest(addORDeleteProductToRecycleZodSchema), addOrDeleteProductToRecycle);
router.get("/getAll", getAllRecycle);
router.get("/getsingle/:id", getSingleRecycle);
router.post("/deleteRecycle", deleteRecycle);
router.post("/updateStatus", updateRecycleStatus);
//
export const RecycleRoutes = router;
