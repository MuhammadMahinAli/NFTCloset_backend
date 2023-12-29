import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {DesignerPortfolio} from "./designerPortfolio.model.js";

export const addDesignerPortfolioService = async (payload) => {
  const {session, ...data} = payload;
  const result = await DesignerPortfolio.create(payload, {session});
  if (!result[0]) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create portfolio");
  }

  return result[0];
};
export const updateDesignerPortfolioService = async (payload) => {
  const {designer, session, ...portfolio} = payload;
  const exist = await DesignerPortfolio.findOne({designer, _id: portfolio.id});
  if (!exist) {
    throw new ApiError(httpStatus.NOT_FOUND, "portfolio doesn't found!");
  }
  const result = await DesignerPortfolio.findOneAndUpdate({designer, _id: portfolio.id}, portfolio, {new: true}).session(session);

  return result;
};
