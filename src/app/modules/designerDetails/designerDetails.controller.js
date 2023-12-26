import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import {addDesignerDetailsService, deleteDesignerDetailsService, getDesignerDetailsService} from "./designerDetails.service.js";

//------create designer details
export const createDesignerDetails = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await addDesignerDetailsService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Details added successfully!",
    data: result,
  });
});
//------get designer details
export const getDesignerDetails = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getDesignerDetailsService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Details retrived successfully!",
    data: result,
  });
});
//------delete designer details
export const deleteDesignerDetails = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await deleteDesignerDetailsService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Details deleted successfully!",
    data: result,
  });
});
