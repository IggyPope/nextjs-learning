import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { contactSchema } from '@/schemas/contact.schema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body: unknown = req.body;

    const parseResult = contactSchema.parse(body);

    if (!parseResult) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    // TODO: Send email

    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json(error.flatten().fieldErrors);
    }

    return res
      .status(500)
      .json({ message: 'A server error occurred while submitting the form' });
  }
}
