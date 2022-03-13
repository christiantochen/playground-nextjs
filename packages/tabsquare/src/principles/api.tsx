import { NextApiRequest, NextApiResponse } from 'next'
import apiHandler from '../apiHandler'
import Config from '../config'
import fetcher from '../fetcher'

const getPrinciples = async (req: NextApiRequest, res: NextApiResponse) => {
  const { status, data } = await fetcher(
    `${Config.API_URL}/organization-principle`
  )
    .setCookies(req.cookies)
    .get({
      $limit: 10,
    })

  res.status(status).json(data)
}

export default apiHandler({
  get: getPrinciples,
})
