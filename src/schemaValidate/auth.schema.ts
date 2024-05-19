import { z } from 'zod';

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/;

export const LoginBody = z
  .object({
    email: z
      .string()
      .min(1, { message: "Input cannot be empty" })  // Đảm bảo trường không để trống
      .email({ message: "Invalid email format" })
      .max(50, { message: "Invalid email format. Email is too long" }),
    password: z
      .string()
      .min(1, { message: "Input cannot be empty" })  // Đảm bảo trường không để trống
      .min(8, { message: "Password must be at least 8 characters long" })
  })
  .superRefine(({ password }, ctx) => {
    if (!passwordPattern.test(password)) {
      ctx.addIssue({
        code: 'custom',
        message: 'The password is incorrect',
        path: ['password']
      });
    }
  });

export type LoginBodyType = z.TypeOf<typeof LoginBody>;


export const RegisterBody = z
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
    password: z
    .string()
    .min(1,{message:"Input cannot be empty"})
    .min(8,{message:"Password must be at least 8 characters long"}),
    confirmPassword: z
    .string()
    .min(1,{message:"Input cannot be empty"})
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Confirm Password do not match',
        path: ['confirmPassword']
      })
    }
  })

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>