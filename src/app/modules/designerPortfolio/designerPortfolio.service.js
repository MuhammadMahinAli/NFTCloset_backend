import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {DesignerPortfolio} from "./designerPortfolio.model.js";
//add designer portfolio
export const addDesignerPortfolioService = async (payload) => {
  const {session, ...data} = payload;
  const result = await DesignerPortfolio.create(payload, {session});
  if (!result[0]) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create portfolio");
  }

  return result[0];
};
//update designer portfolio
export const updateDesignerPortfolioService = async (payload) => {
  const {designer, session, ...portfolio} = payload;
  const exist = await DesignerPortfolio.findOne({designer, _id: portfolio.id});
  if (!exist) {
    throw new ApiError(httpStatus.NOT_FOUND, "portfolio doesn't found!");
  }
  const result = await DesignerPortfolio.findOneAndUpdate({designer, _id: portfolio.id}, portfolio, {new: true}).session(session);

  return result;
};
//get all portfolios
export const getDesignerAllPortfolioService = async (designer) => {
  const result = await DesignerPortfolio.find({designer});
  return result;
};
//get single portfolio
export const getSingleDesignerPortfolioService = async (designer, id) => {
  const result = await DesignerPortfolio.find({designer, _id: id});
  return result;
};
//delete portfolio
export const deleteDesignerPortfolioService = async (designer, id) => {
  const result = await DesignerPortfolio.findOneAndDelete({designer, _id: id});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "portfolio couldn't be deleted!");
  }
  return result;
};
