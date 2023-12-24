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
// RecycleSchema.products.index({expireAt: 1}, {expireAfterSeconds: 20});
//create Recycle model
export const Reprint = model("Reprint", ReprintSchema);
