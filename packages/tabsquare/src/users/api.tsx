import { NextApiRequest, NextApiResponse } from 'next'
import apiHandler from '../apiHandler'
import Config from '../config'
import fetcher from '../fetcher'

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const { status, data } = await fetcher(`${Config.API_URL}/user`)
    .setCookies(req.cookies)
    .get({
      $nested: true,
    })

  res.status(status).json(data)
}

export default apiHandler({
  get: getUsers,
})
