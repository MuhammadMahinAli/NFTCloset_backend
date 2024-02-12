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
  const orders = await GigOrder.find({designer}).populate("gig").populate("buyer").populate("designer");
  return orders;
};
//get all order by buyer
export const getGigOrderByBuyerService = async (buyer) => {
  const orders = await GigOrder.find({buyer}).populate("gig").populate("buyer").populate("designer");
  return orders;
};
//get all order by buyer
export const getGigOrderByStatusService = async (id, status) => {
  const orders = await GigOrder.find({designer: id, status: status}).populate("gig").populate("buyer").populate("designer");
  return orders;
};
//get single order
export const getSingleGigOrderService = async (id) => {
  const orders = await GigOrder.find({_id: id}).populate("gig").populate("buyer").populate("designer");
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
//delete  order
export const deleteGigOrderService = async (id) => {
  const res = await GigOrder.findOneAndDelete({_id: id});
  return res;
};
