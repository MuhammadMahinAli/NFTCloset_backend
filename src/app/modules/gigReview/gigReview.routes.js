import express from "express";
import {addGigReview, deleteGigReview, getAllGigReview, getSingleGigReview, updateGigReview} from "./gigReview.controller.js";

const router = express.Router();
router.post("/", addGigReview);
router.get("/getsingle/:id", getSingleGigReview);
router.get("/getAll/:id", getAllGigReview);
router.post("/update", updateGigReview);
router.delete("/:id", deleteGigReview);

//
export const GigReviewRoutes = router;
