import httpStatus from "http-status";
import {DesignerCertificate} from "./designerCertificate.model.js";
import {ApiError} from "../../../handleError/apiError.js";

export const addDesignerCertificateService = async (payload) => {
  const {session, ...data} = payload;
  const result = await DesignerCertificate.create(payload, {session});
  if (!result[0]) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create certificate");
  }

  return result[0];
};

export const getDesignerAllCertificateService = async (designer) => {
  const certificates = await DesignerCertificate.find({designer});
  return certificates;
};

export const deleteDesignerCertificateService = async ({certificate, designer}) => {
  const result = await DesignerCertificate.findOneAndDelete({_id: certificate, designer});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete certificate");
  }

  return result;
};
