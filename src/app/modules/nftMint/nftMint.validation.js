import {z} from "zod";

export const storeMintedNftZodSchema = z.object({
  body: z
    .object({
        user: z.string({
            required_error: "User is required",
          }),

      title: z.string({
        required_error: "title is required",
      }),
      description: z.string({
        required_error: "description is required",
      }),
      price: z.number({
        required_error: "price is required",
      }),    

    //   image: z.string({
    //     required_error: "image is required",
    //   }),
    })
    .strict(),
});