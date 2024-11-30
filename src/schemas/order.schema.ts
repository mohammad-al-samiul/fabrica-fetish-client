import { z } from "zod";

const orderValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  phone: z.string().regex(/^\d{11}$/, "Please enter a valid mobile number!"),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Postal code must be exactly 5 digits."), // Adjust regex based on your postal code format
  address: z.string().min(1, "Please enter your address!"),
});

export default orderValidationSchema;
