import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {GigFaq} from "./gigFaq.model.js";

//add gig faq
export const addGigFaqService = async (payload) => {
  const {session, ...data} = payload;
  const result = await GigFaq.create([data], {session});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create gig faq");
  }

  return result[0];
};
//delete gig faq
export const deleteGigFaqService = async (payload) => {
  const {session, ...data} = payload;
  const result = await GigFaq.create([data], {session});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create gig faq");
  }

  return result[0];
};
