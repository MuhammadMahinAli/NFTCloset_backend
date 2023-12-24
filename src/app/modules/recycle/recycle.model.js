import {Schema, model} from "mongoose";

const RecycleSchema = new Schema(
  {
    requestedBy: {
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
    addedAt: {
      type: String,
      default: new Date(Date.now()),
    },
    recyclePrice: {
      type: Number,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "processing", "done"],
    },
  },
  {
    timestamps: true,
  }
);
// RecycleSchema.products.index({expireAt: 1}, {expireAfterSeconds: 20});
//create Recycle model
export const Recycle = model("Recycle", RecycleSchema);
