import express from "express";
import {createDesignerDetails, deleteDesignerDetails, getDesignerDetails, updateDesignerDetails} from "./designerDetails.controller.js";
const router = express.Router();

router.post("/", createDesignerDetails);
router.get("/getsingle/:id", getDesignerDetails);
router.delete("/:id", deleteDesignerDetails);
router.post("/updateDetails", updateDesignerDetails);
//
export const DesignerDetailsRoutes = router;
