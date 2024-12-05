import { z } from "zod";

const allowedFileTypes = ["image/jpeg", "image/png"];

const createProductValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z.union([
    z.number().min(0.01, "Price must be greater than zero"),
    z
      .string()
      .regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number")
      .transform((val) => parseFloat(val)),
  ]),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Category is required"),
  image: z
    .any()
    .refine(
      (file) => !file || file instanceof File,
      "Image must be a valid file"
    )
    .refine(
      (file) => !file || allowedFileTypes.includes(file.type),
      "Only JPEG or PNG files are allowed"
    ),
  quantity: z.union([
    z
      .number()
      .int("Quantity must be an integer")
      .min(0, "Quantity cannot be negative"),
    z
      .string()
      .regex(/^\d+$/, "Quantity must be an integer")
      .transform((val) => parseInt(val, 10)),
  ]),
  rate: z
    .union([
      z.number(),
      z
        .string()
        .regex(/^\d+(\.\d+)?$/, "Rate must be a valid number")
        .transform((val) => parseFloat(val)),
    ])
    .refine((val) => val >= 0 && val <= 5, {
      message: "Rating must be between 0 and 5",
    }),
  count: z.union([
    z.number().int("Rating count must be an integer").min(0),
    z
      .string()
      .regex(/^\d+$/, "Count must be an integer")
      .transform((val) => parseInt(val, 10)),
  ]),
});

export default createProductValidationSchema;
