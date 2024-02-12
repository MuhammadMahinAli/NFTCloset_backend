import express from "express";
import {addGigOrder, deleteGigOrder, getAllGigOrder, getGigOrderByBuyer, getGigOrderByStatus, getSingleGigOrder, updateGigOrderStatus} from "./gigOrder.controller.js";

const router = express.Router();
router.post("/", addGigOrder);
router.get("/getsingle/:id", getSingleGigOrder);
router.get("/getAll/:id", getAllGigOrder);
router.get("/getByStatus", getGigOrderByStatus);
router.get("/getByBuyer/:id", getGigOrderByBuyer);
router.post("/updateStatus", updateGigOrderStatus);
router.delete("/:id", deleteGigOrder);

//
export const GigOrdersRoutes = router;
