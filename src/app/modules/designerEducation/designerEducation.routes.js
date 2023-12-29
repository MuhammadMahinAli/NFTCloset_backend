import express from "express";
import {deleteDesignerEducation, getDesignerEducations} from "./designerEducation.controller.js";

const router = express.Router();

router.get("/designer/:id", getDesignerEducations);

router.delete("/:id", deleteDesignerEducation);
//
export const DesignerEducationRoutes = router;
