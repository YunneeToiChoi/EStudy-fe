import { z } from 'zod';

export const OrderCourseBody = z
  .object({
    address: z
    .string()
    .trim()
    .min(1,{message:"Input cannot be empty"})
    .min(10,{message:"Address is invalid"}),
    phone: z.string()
    .min(1,{message:"Input cannot be empty"})
    .min(9, { message: "Phone number is invalid" })
    .max(12, { message: "Phone number is invalid" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }), 
  })
  .strict()

export type OrderCourseBodyType = z.TypeOf<typeof OrderCourseBody>