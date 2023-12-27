import {Schema, model} from "mongoose";

const GigPackageSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },
    packageName: {
      type: String,
      required: true,
      enum: ["BASIC", "STANDARD", "PREMIUM"],
    },
    description: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: String,
      required: true,
    },
    revisions: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    serviceType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create GigPackage model
export const GigPackage = model("GigPackage", GigPackageSchema);
