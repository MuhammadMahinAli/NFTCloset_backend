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
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },

    tags: [
      {
        type: String,
      },
    ],

    serviceType: {
      type: String,
      required: true,
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
