import mongoose from "mongoose";
import {Gig} from "./gig.model.js";
import {addGigFaqService} from "../gigFaq/gigFaq.service.js";
import {addGigPackageService} from "../gigPackage/gigPackage.service.js";
import {createService} from "../gigServices/serviceUtils.js";

export const createGigService = async (payload) => {
  const {faqs, packages, service, ...data} = payload;
  let res = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await Gig.create([data], {session});
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create gig");
    }
    res = result[0];
    //creating faq
    if (faqs) {
      await Promise.all(faqs?.map(async (faq) => await addGigFaqService({gig: data?._id, ...faq, session})));
    }
    //creating package
    if (packages) {
      await Promise.all(packages?.map(async (pack) => await addGigPackageService({gig: data?._id, ...pack, session})));
    }
    //creating service
    if (service) {
      await createService(service, session);
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return res;
};
