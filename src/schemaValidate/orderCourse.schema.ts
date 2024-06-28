import { z } from 'zod';

export const OrderCourseBody = z
  .object({
    address: z
    .string()
    .trim()
    .min(1,{message:"Input cannot be empty"})
    .min(10,{message:"Address is invalid"}),
    email: z
    .string()
    .min(1,{message:"Input cannot be empty"})
    .email({message:"Invalid email format"})
    .max(50, { message: "Invalid email format. Email is too long" }), 
  })
  .strict()

export type OrderCourseBodyType = z.TypeOf<typeof OrderCourseBody>

export const ActiveCode = z
.object({
  code: z
  .string()
  .trim()
  .min(1,{message:"Input cannot be empty"})
})
export type ActiveCodeType = z.TypeOf<typeof ActiveCode>