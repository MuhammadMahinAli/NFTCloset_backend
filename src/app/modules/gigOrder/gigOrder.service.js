import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {GigOrder} from "./gigOrder.model.js";

//add gig order
export const addGigOrderService = async (payload) => {
  const result = await GigOrder.create(payload);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create gig order");
  }

  return result;
};

//get all order by user
export const getAllGigOrderService = async (designer) => {
  const orders = await GigOrder.find({designer});
  return orders;
};
//get single order
export const getSingleGigOrderService = async (id) => {
  const orders = await GigOrder.find({_id: id});
  return orders;
};
//update status
export const updateGigOrderStatusService = async (payload) => {
  const result = await GigOrder.findOneAndUpdate({_id: payload?.id}, {status: payload?.status}, {new: true});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update gig order status");
  }

  return result;
};
