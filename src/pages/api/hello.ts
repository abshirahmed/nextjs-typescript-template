// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const handler: NextApiHandler = (req, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: "John Doe" });
};
export default handler;
