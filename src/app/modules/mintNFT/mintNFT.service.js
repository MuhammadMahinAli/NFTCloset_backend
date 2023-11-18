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
export const mintNFTByCrossmintService = async (CID, wallet) => {
  const data = JSON.stringify({
    recipient: `polygon:${wallet}`,
    metadata: `https://gateway.pinata.cloud/ipfs/${CID}`,
  });
  try {
    const response = await fetch("https://staging.crossmint.com/api/2022-06-09/collections/default-polygon/nfts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-client-secret": config.crossmint_client_secret,
        "x-project-id": config.crossmint_project_id,
      },
      body: data,
    });
    const res = await response.json();
    console.log(JSON.stringify(res));
    return res;
  } catch (error) {
    console.log(error);
  }
};
// mintNFTByCrossmintService();
const getNFTs = async () => {
  const url = "https://staging.crossmint.com/api/v1-alpha1/wallets/polygon:0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1/nfts";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-CLIENT-SECRET": config.crossmint_client_secret,
      "X-PROJECT-ID": config.crossmint_project_id,
    },
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
};
// getNFTs();
