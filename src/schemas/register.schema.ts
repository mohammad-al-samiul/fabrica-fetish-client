import { z } from "zod";

const allowedFileTypes = ["image/jpeg", "image/png"];

const registerValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  phone: z.string().regex(/^\d{11}$/, "Please enter a valid mobile number!"),
  password: z.string().min(6, "Password must be at least 6 characters."),
  photo: z
    .any()
    .refine((file) => file instanceof File, "Photo must be a valid file")
    .refine(
      (file) => allowedFileTypes.includes(file.type),
      "Only JPEG or PNG files are allowed"
    ),
});

export default registerValidationSchema;
