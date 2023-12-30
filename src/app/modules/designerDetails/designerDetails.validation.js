import {z} from "zod";

export const addDesignerDetailsZodSchema = z.object({
  body: z
    .object({
      designer: z.string({
        required_error: "designer is required",
      }),
      displayName: z.string({
        required_error: "displayName is required",
      }),
      description: z.string({
        required_error: "description is required",
      }),

      bannerImg: z.string().optional(),
      profession: z.string().optional(),
      skills: z.array(z.string().optional()).optional(),
      languages: z.array(z.string().optional()).optional(),
      hobby: z.array(z.string().optional()).optional(),

      educations: z
        .array(
          z.object({
            country: z.string({
              required_error: "country is required",
            }),
            institution: z.string({
              required_error: "institution is required",
            }),
            major: z.string({
              required_error: "major is required",
            }),
            year: z.string({
              required_error: "year is required",
            }),
            title: z.string({
              required_error: "title is required",
            }),
          })
        )
        .optional(),
      certifications: z
        .array(
          z.object({
            certificateOReward: z.string({
              required_error: "certificateOReward is required",
            }),
            certifiedFrom: z.string({
              required_error: "certifiedFrom is required",
            }),
            year: z.string({
              required_error: "year is required",
            }),
          })
        )
        .optional(),
    })
    .strict(),
});
