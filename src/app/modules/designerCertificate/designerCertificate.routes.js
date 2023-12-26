import express from "express";
import {deleteDesignerCertificate, getDesignerAllCertificates} from "./designerCertificate.controller.js";

const router = express.Router();

// router.post("/", createDesignerDetails);
router.get("/designer/:id", getDesignerAllCertificates);
// router.get("/getuserby/:role", getSingleUserByRole);
// router.patch("/:id", validateRequest(updateUserZodSchema), updateUser);
router.delete("/:id", deleteDesignerCertificate);
//
export const DesignerCertificateRoutes = router;
