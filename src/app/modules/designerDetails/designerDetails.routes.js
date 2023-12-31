import express from "express";
import {createDesignerDetails, deleteDesignerDetails, getDesignerDetails, updateDesignerDetails} from "./designerDetails.controller.js";
import {addDesignerDetailsZodSchema} from "./designerDetails.validation.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
const router = express.Router();

router.post("/", validateRequest(addDesignerDetailsZodSchema), createDesignerDetails);
router.get("/getsingle/:id", getDesignerDetails);
router.delete("/:id", deleteDesignerDetails);
router.post("/updateDetails", updateDesignerDetails);
//
export const DesignerDetailsRoutes = router;
