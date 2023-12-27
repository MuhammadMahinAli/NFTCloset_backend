import {Schema, model} from "mongoose";

const DesignerEarningSchema = new Schema(
  {
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    availableBalance: {
      type: Number,
      required: true,
    },
    totalEarnings: {
      type: Number,
      required: true,
    },
    totalExpanse: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create DesignerEarning model
export const DesignerEarning = model("DesignerEarning", DesignerEarningSchema);
