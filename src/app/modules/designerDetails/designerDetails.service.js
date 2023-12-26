import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {DesignerDetails} from "./designerDetails.model.js";
import {addDesignerEducationService} from "../designerEducation/designerEducation.service.js";
import mongoose from "mongoose";
import {addDesignerCertificateService} from "../designerCertificate/designerCertificate.service.js";
import {DesignerEducation} from "../designerEducation/designerEducation.model.js";
import {DesignerCertificate} from "../designerCertificate/designerCertificate.model.js";

export const addDesignerDetailsService = async (payload) => {
  let data = null;
  const {educations, certificates, ...others} = payload;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await DesignerDetails.create([others], {session});
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create DesignerDetails");
    }
    data = result[0];
    //creating eduction
    await Promise.all(educations?.map(async (education) => await addDesignerEducationService({designer: data?._id, ...education, session})));
    //creating certificate
    await Promise.all(certificates?.map(async (certificate) => await addDesignerCertificateService({designer: data?._id, ...certificate, session})));
    //
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return data;
};

export const getDesignerDetailsService = async (designer) => {
  const details = await DesignerDetails.find({designer});
  return details;
};

export const deleteDesignerDetailsService = async (designer) => {
  const session = await mongoose.startSession();
  let result = null;
  try {
    session.startTransaction();
    result = await DesignerDetails.findOneAndDelete({designer}).session(session);
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete designer details");
    }

    //deleting eduction
    const educations = await DesignerEducation.find({designer});
    await Promise.all(educations?.map(async (education) => await DesignerEducation.findOneAndDelete({designer}).session(session)));
    //deleting certificate
    const certificates = await DesignerCertificate.find({designer});
    await Promise.all(certificates?.map(async (certificate) => await DesignerCertificate.findOneAndDelete({designer}).session(session)));
    //
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return result;
};
