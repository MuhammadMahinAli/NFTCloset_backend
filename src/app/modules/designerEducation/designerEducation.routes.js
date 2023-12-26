import express from "express";
import {deleteDesignerEducation, getDesignerEducations} from "./designerEducation.controller.js";

const router = express.Router();

// router.post("/", createDesignerDetails);
router.get("/designer/:id", getDesignerEducations);
// router.get("/getuserby/:role", getSingleUserByRole);
// router.patch("/:id", validateRequest(updateUserZodSchema), updateUser);
router.delete("/:id", deleteDesignerEducation);
//
export const DesignerEducationRoutes = router;
