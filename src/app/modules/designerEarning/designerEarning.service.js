import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {DesignerEarning} from "./designerEarning.model.js";

export const addDesignerEarningService = async (payload) => {
  const {session, ...data} = payload;
  const result = await DesignerEarning.create(payload, {session});
  if (!result[0]) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create earning");
  }

  return result[0];
};
