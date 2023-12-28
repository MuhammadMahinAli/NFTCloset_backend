import {Schema, model} from "mongoose";

const GarmentSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },

    title: {
      type: String,
      default: "3D Garment Design",
    },
    itemType: {
      type: String,
      required: true,
    },
    genderGroup: [
      {
        type: String,
      },
    ],
    software: [
      {
        type: String,
      },
    ],
    purpose: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create Garment model
export const Garment = model("Garment", GarmentSchema);
