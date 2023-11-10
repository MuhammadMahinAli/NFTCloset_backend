import httpStatus from "http-status";
import {MintNFT} from "./mintNFT.model.js";
import {ApiError} from "../../../handleError/apiError.js";

//-------------mint an NFT
export const createMintNFTService = async (data) => {
  const newNFT = await MintNFT.create(data);
  if (!newNFT) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create nft");
  }

  return result;
};
