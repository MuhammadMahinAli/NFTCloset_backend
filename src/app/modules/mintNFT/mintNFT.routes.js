import express from "express";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createMintNFTZodSchema} from "./mintNFT.validation.js";
import {createMintNFT} from "./mintNFT.controller.js";

const router = express.Router();

router.post("/", validateRequest(createMintNFTZodSchema), createMintNFT);
// router.post("/crossmint", mintNFTByCrossmint);
// router.post("/:id", validateRequest(updateMintNFTZodSchema), updateStatusMintNFT);

//
export const MintNFTRoutes = router;
