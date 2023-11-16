import httpStatus from "http-status";
import {MintNFT} from "./mintNFT.model.js";
import {ApiError} from "../../../handleError/apiError.js";
import config from "../../../config/index.js";

//-------------mint an NFT
export const createMintNFTService = async (data) => {
  const newNFT = await MintNFT.create(data);
  if (!newNFT) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create nft");
  }

  return newNFT;
};

//mint nft by croosmint
const mintNFTByCrossmintService = async () => {
  const data = JSON.stringify({
    recipient: `polygon:0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1`,
    metadata: {
      name: "Proof of Attendance",
      image: "https://www.example.com/assets/thanks_for_attending.png",
      description: "Proof of Attendance to ACME Inc Tech Event",
    },
  });
  try {
    const response = await fetch("https://staging.crossmint.com/api/2022-06-09/collections/default/nfts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-client-secret": config.crossmint_client_secret,
        "x-project-id": config.crossmint_project_id,
      },
      body: data,
    });
    console.log(JSON.stringify(response));
    return response;
  } catch (error) {
    console.log(error);
  }
};
// mintNFTByCrossmintService();
