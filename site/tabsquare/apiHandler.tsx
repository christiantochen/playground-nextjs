import { NextApiRequest, NextApiResponse } from 'next'

const apiHandler = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.method) return res.status(400).end('Invalid Request')

    const method = req.method.toLowerCase()

    if (!handler[method])
      return res.status(405).end(`Method ${req.method} Not Allowed`)

    try {
      await handler[method](req, res)
    } catch (err) {
      res.status(500).end('Internal Server Error')
    }
  }
}

export default apiHandler
