import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError";
import {DesignerPortfolio} from "./designerPortfolio.model.js";

export const addDesignerPortfolioService = async (payload) => {
  const {session, ...data} = payload;
  const result = await DesignerPortfolio.create(payload, {session});
  if (!result[0]) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create portfolio");
  }

  return result[0];
};
