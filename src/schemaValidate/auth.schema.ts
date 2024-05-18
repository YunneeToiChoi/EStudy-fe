import { z } from 'zod';

const passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

export const LoginBody = z
  .object({
    username: z.string().min(1, { message: "Tên đăng nhập là bắt buộc" }).max(256, { message: "Tên đăng nhập phải dưới 256 ký tự" }),
    password: z.string().min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" })
  })
  .superRefine(({ password }, ctx) => {
    if (!passwordPattern.test(password)) {
      ctx.addIssue({
        code: 'custom',
        message: 'Định dạng mật khẩu không hợp lệ',
        path: ['password']
      });
    }
  });

export type LoginBodyType = z.TypeOf<typeof LoginBody>;
