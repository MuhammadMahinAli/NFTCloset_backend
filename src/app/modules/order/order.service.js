import httpStatus from "http-status";
import {Order} from "./order.model.js";
import {calculateTotalPrice} from "./order.utils.js";
import {ApiError} from "../../../handleError/apiError.js";

//-------create an order
export const createOrderService = async (payload) => {
  const totalPrice = calculateTotalPrice(payload?.products);
  const data = {totalPrice, ...payload};
  const newOrder = await Order.create(data);
  if (!newOrder) {
    throw new ApiError(httpStatus.BAD_REQUEST, "unable to create order!");
  }
  return newOrder;
};
//-----------get all order
export const getAllOrderByUserService = async (id) => {
  const orders = await Order.find({orderedBy: id});
  return orders;
};

//-----------get single order
export const getSingleOrderService = async (id) => {
  const order = await Order.findOne({_id: id});
  return order;
};
//-----------Update order status or payment
export const updateOrderService = async (id, data) => {
  const order = await Order.findOne({_id: id});
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, "Order doesn't found!");
  }
  const result = await Order.findOneAndUpdate({_id: id}, data, {new: true});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Order couldn't be updated!");
  }
  return result;
};
//-----------delete order
export const deleteOrderService = async (id) => {
  const result = await Order.findByIdAndDelete({_id: id});
  return result;
};
