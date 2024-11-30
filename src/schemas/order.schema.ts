import { z } from "zod";

const orderValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  phone: z.string().min(10, "Please enter a valid mobile number!"),
  postCode: z.string().min(3, "Postal code must be exactly 5 digits."), // Adjust regex based on your postal code format
  address: z.string().min(1, "Please enter your address!"),
});

export default orderValidationSchema;
