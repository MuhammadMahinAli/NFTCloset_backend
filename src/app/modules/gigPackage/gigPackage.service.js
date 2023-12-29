import httpStatus from "http-status";
import {GigPackage} from "./gigPackage.model.js";
import {ApiError} from "../../../handleError/apiError.js";

//add gig faq
export const addGigPackageService = async (payload) => {
  const {session, ...data} = payload;
  const result = await GigPackage.create([data], {session});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create gig package");
  }

  return result[0];
};
