import { z } from 'zod';

export const OTPCode = z.object({
    pin: z.string().min(8, {
      message: "Mã OTP không khả dụng",
    }),
  })
export type OTPCodeType = z.TypeOf<typeof OTPCode>