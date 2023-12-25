import {Schema, model} from "mongoose";

const ReprintSchema = new Schema(
  {
    reprintedBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    productID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    productImg: {
      type: String,
      required: true,
    },
    reprintPrice: {
      type: Number,
    },
    totalReprinted: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
//create Reprint model
export const Reprint = model("Reprint", ReprintSchema);
