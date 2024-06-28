import { z } from 'zod';
export const InfoUserBody = z
  .object({
    username: z
    .string()
    .trim()
    .min(1,{message:"Input cannot be empty"})
    .min(6,{message:"Username is invalid"})
    .max(20,{message:"Username is invalid. username is too long"}),
    email: z
    .string()
    .min(1,{message:"Input cannot be empty"})
    .email({message:"Invalid email format"})
    .max(50, { message: "Invalid email format. Email is too long" }),
    phoneNumber: z.string()
    .min(1,{message:"Input cannot be empty"})
    .min(9, { message: "Phone number is invalid" })
    .max(12, { message: "Phone number is invalid" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }), 
    description: z
    .string()
    .min(1,{message:"Input cannot be empty"})
  })
  .strict()
  
export type infoUserType = z.TypeOf<typeof InfoUserBody>

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/;

export const ResetPasswordBody = z
  .object({
    oldPassword: z
    .string()
    .min(1,{message:"Input cannot be empty"})
    .min(8,{message:"Password must be at least 8 characters long"}),
    newPassword: z
    .string()
    .min(1,{message:"Input cannot be empty"})
    .min(8,{message:"Password must be at least 8 characters long"}),
    confirmPassword: z
    .string()
    .min(1,{message:"Input cannot be empty"})
  })
  .strict()
  
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (!passwordPattern.test(newPassword)) {
      ctx.addIssue({
        code: 'custom',
        message: 'The password is incorrect',
        path: ['newPassword']
      });
    }
    else if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Confirm Password do not match',
        path: ['confirmPassword']
      })
    }
  })
  .superRefine(({ oldPassword }, ctx) => {
    if (!passwordPattern.test(oldPassword)) {
      ctx.addIssue({
        code: 'custom',
        message: 'The password is incorrect',
        path: ['oldPassword']
      });
    }
  })

export type ResetPasswordBodyType = z.TypeOf<typeof ResetPasswordBody>