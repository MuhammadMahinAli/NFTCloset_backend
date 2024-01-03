import {Schema, model} from "mongoose";

const GigSchema = new Schema(
  {
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "Fashion",
    },
    tags: [
      {
        type: String,
      },
    ],

    serviceType: {
      type: String,
      required: true,
      enum: ["Technical Drawing and Tech Pack", "Fashion Illustration", "3D Garment Design", "Pattern Making", "Full Design Process"],
    },
    service: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "TeckPack" || "FullDesign" || "Fashion" || "Garment" || "Pattern",
    },
    video: {
      type: String,
      required: true,
    },
    documents: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create Gig model
export const Gig = model("Gig", GigSchema);
