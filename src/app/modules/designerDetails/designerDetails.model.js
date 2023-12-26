import {Schema, model} from "mongoose";

const DesignerDetailsSchema = new Schema(
  {
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    displayName: {
      type: String,
    },
    userName: {
      type: String,
    },
    bannerImg: {
      type: String,
    },
    description: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    languages: [
      {
        type: String,
      },
    ],
    portfolio: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//create DesignerDetails model
export const DesignerDetails = model("DesignerDetails", DesignerDetailsSchema);
