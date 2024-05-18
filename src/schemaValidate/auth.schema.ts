import { z } from 'zod';

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/;

export const LoginBody = z
  .object({
    email: z
      .string()
      .min(1, { message: "không để trống" })  // Đảm bảo trường không để trống
      .min(10,{ message: "email không hợp lệ"})
      .max(50, { message: "email không hợp lệ" })
      .email({ message: "email không hợp lệ" }),
    password: z
      .string()
      .min(1, { message: "không để trống" })  // Đảm bảo trường không để trống
      .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" })
  })
  .superRefine(({ password }, ctx) => {
    if (!passwordPattern.test(password)) {
      ctx.addIssue({
        code: 'custom',
        message: 'The password is incorrect!',
        path: ['password']
      });
    }
  });

export type LoginBodyType = z.TypeOf<typeof LoginBody>;


export const RegisterBody = z
  .object({
    username: z.string().trim().min(2).max(256),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100)
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Mật khẩu không khớp',
        path: ['confirmPassword']
      })
    }
  })

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>