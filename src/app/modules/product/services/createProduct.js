import mongoose from "mongoose";
import {generateProductID} from "../product.utils.js";
import {addProductToDifferentVersions, generateVersionProperty} from "../../version/version.utils.js";
import {Product} from "../product.model.js";
import httpStatus from "http-status";
import {ApiError} from "../../../../handleError/apiError.js";
import {addProductToCollections} from "../../collection/collection.utils.js";

import {User} from "../../user/user.model.js";

//------create a new product
export const createProductService = async (body) => {
  const {payload, versions: bodyVersions} = body;
  let newProductData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const productID = await generateProductID();
    //generate how versions property added to product
    const versions = generateVersionProperty(bodyVersions);
    const data = {productID, versions, ...payload};
    const newProduct = await Product.create([data], {session});
    if (!newProduct?.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create product");
    }
    //adding this product to its collection
    const newProductId = newProduct[0]?._id;
    await addProductToCollections(payload?.collections, newProductId, session);
    //adding this product to the versions
    await addProductToDifferentVersions(newProductId, bodyVersions, session);
    newProductData = newProduct[0];
    // //creating certificate if need this
    // if (payload.certified) {
    //   const artist = await User.findOne({_id: payload?.artist});
    //   //generating pdf of certificate
    //   await generatePDF({name: `${artist?.name?.firstName} ${artist?.name?.lastName}`, itemName: payload?.title});
    //   const base64Pdf = readFileSync("certificate/certificate.pdf", {encoding: "base64"});

    //   artist.certificate = base64Pdf;
    //   await artist.save({session});
    //   //sending mail to the artist
    //   const mailOptions = generateMailOptions({name: `${artist?.name?.firstName} ${artist?.name?.lastName}`, email: "isratkws@gmail.com"});
    //   await transporter.sendMail(mailOptions);
    //   //deleting pdf after send to artist
    //   unlinkSync("certificate/certificate.pdf");
    // }
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  return newProductData;
};
