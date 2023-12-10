import { z } from "zod";

export const formValidator = z.object({
  emailSender: z.string().email(),
  message: z
    .string()
    .min(1, {
      message: "Your message is too short.",
    })
    .max(5000, {
      message: "Your message is too long. Maximum lenght is 5000 words.",
    }),
});

export type TFormValidator = z.infer<typeof formValidator>;
