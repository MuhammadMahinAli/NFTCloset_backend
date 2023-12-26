import express from "express";
import {createDesignerDetails, deleteDesignerDetails, getDesignerDetails} from "./designerDetails.controller.js";
const router = express.Router();

router.post("/", createDesignerDetails);
router.get("/getsingle/:id", getDesignerDetails);
// router.get("/getuserby/:role", getSingleUserByRole);
// router.patch("/:id", validateRequest(updateUserZodSchema), updateUser);
router.delete("/:id", deleteDesignerDetails);
//
export const DesignerDetailsRoutes = router;
