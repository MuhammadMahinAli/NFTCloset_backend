import express from "express";
import {deleteDesignerCertificate, getDesignerAllCertificates} from "./designerCertificate.controller.js";

const router = express.Router();

router.get("/designer/:id", getDesignerAllCertificates);
router.delete("/", deleteDesignerCertificate);
//
export const DesignerCertificateRoutes = router;
