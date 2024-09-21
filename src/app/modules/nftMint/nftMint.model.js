import { Schema, model } from "mongoose";

const nftMintSchema = new Schema(
    {
        user:{
            type:Schema.Types.ObjectId,
            required:true,
            ref:"User",
        },
        image:{
            type:String,
            required: true,
        },
        description: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        {
            timestamps:true,
        }
);

// export nftMint model
export const NftMint = model("nftMint", nftMintSchema);