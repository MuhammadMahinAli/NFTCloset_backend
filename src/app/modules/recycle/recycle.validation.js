import {z} from "zod";

export const createRecycleZodSchema = z.object({
  body: z
    .object({
      requestedBy: z.string({
        required_error: "requestedBy is required",
      }),
      productID: z.string({
        required_error: "product is required",
      }),

      recyclePrice: z.number().optional(),
    })
    .strict(),
});
