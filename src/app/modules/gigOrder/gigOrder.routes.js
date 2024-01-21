import express from "express";
import {addGigOrder, getAllGigOrder, getSingleGigOrder, updateGigOrderStatus} from "./gigOrder.controller.js";

const router = express.Router();
router.post("/", addGigOrder);
router.get("/getsingle/:id", getSingleGigOrder);
router.get("/getAll/:id", getAllGigOrder);
router.post("/updateStatus", updateGigOrderStatus);

//
export const GigOrdersRoutes = router;
