import {Reprint} from "./reprint.model.js";
import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
//-----create a reprint
export const createReprintService = async (payload) => {
  const exist = await Reprint.findOne({reprintedBy: payload.reprintedBy, productID: payload.productID});
  if (exist) {
    exist.totalReprinted++;
    exist.save();
    return exist;
  }
  const results = await Reprint.create(payload);
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Product can't be reprinted");
  }

  return results;
};
