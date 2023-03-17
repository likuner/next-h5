// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import logger from '@/lib/logger'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '500kb',
    },
  },
}

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  logger.info(req.query, 'req')
  res.status(200).json({ name: 'John Doe' })
}
