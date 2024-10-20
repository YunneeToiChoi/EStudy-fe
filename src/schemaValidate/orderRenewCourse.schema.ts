import { z } from 'zod';

export const OrderRenewCourseBody = z
  .object({
    address: z
      .string()
      .trim()
      .min(1, { message: "Input cannot be empty" })
      .min(10, { message: "Address is invalid" }),
    email: z
      .string()
      .min(1, { message: "Input cannot be empty" })
      .email({ message: "Invalid email format" })
      .max(50, { message: "Invalid email format. Email is too long" }),
    phoneNumber: z
      .string()
      .trim()
      .min(1, { message: "Input cannot be empty" })
      .regex(/^\d{10,15}$/, { message: "Phone number must contain 10 to 15 digits" }),
    userName: z
      .string()
      .trim()
      .min(1, { message: "Input cannot be empty" })
      .max(30, { message: "Username is too long" }),
  })
  .strict();

export type OrderRenewCourseBodyType = z.TypeOf<typeof OrderRenewCourseBody>;
