// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result: boolean;
  error: string;
};

type FormData = {
  name: string;
  email: string;
  budget: number;
  phone: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body as FormData;

  res.status(200).json({ result: true, error: "" });
}
