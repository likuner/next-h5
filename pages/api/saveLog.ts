// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { logger } from '@/lib/logger'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50kb',
    },
  },
}

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  logger.info('referer', req.headers.referer)
  if (req.method === 'POST') {
    logger.info('save-log', req.body)
    res.status(200).json(true)
  }
}
