import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addGigOrderService, getAllGigOrderService, getSingleGigOrderService, updateGigOrderStatusService} from "./gigOrder.service.js";
//------add order
export const addGigOrder = catchAsync(async (req, res, next) => {
  const result = await addGigOrderService(req?.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "add Gig order successfully!",
    data: result,
  });
});
//------get all gig order
export const getAllGigOrder = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getAllGigOrderService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig orders retrived successfully!",
    data: result,
  });
});
//------get single gig order
export const getSingleGigOrder = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getSingleGigOrderService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig order retrived successfully!",
    data: result,
  });
});
//------update order status
export const updateGigOrderStatus = catchAsync(async (req, res, next) => {
  const result = await updateGigOrderStatusService(req?.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "update Gig order status successfully!",
    data: result,
  });
});
