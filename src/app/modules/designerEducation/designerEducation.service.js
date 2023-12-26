import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {DesignerEducation} from "./designerEducation.model.js";

export const addDesignerEducationService = async (payload) => {
  const {session, ...data} = payload;
  const result = await DesignerEducation.create([data], {session});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create education");
  }

  return result[0];
};

export const getDesignerEducationsService = async (designer) => {
  const educations = await DesignerEducation.find({designer});
  return educations;
};

export const deleteDesignerEducationService = async ({education, designer}) => {
  const result = await DesignerEducation.findOneAndDelete({_id: education, designer});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete education");
  }

  return result;
};
