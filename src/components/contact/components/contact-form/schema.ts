import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Must be at least 2 characters long' })
    .regex(/^[a-zA-Z]+$/, {
      message: 'Must only contain latin characters',
    }),
  lastName: z
    .string()
    .min(2, { message: 'Must be at least 2 characters long' })
    .regex(/^[a-zA-Z]+$/, {
      message: 'Must only contain latin characters',
    }),
  email: z.string().email({ message: 'Must be a valid email' }),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters long' }),
  birthday: z
    .string()
    .date()
    .refine(
      (date) => {
        const age = new Date().getFullYear() - new Date(date).getFullYear();

        return age >= 18;
      },
      { message: 'You must be at least 18 years old' },
    ),
});

export type ContactSchema = z.infer<typeof contactSchema>;
