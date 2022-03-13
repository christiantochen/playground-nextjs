import { NextApiRequest, NextApiResponse } from 'next'
import apiHandler from 'tabsquare/apiHandler'
import Config from 'tabsquare/config'
import fetcher from 'tabsquare/fetcher'

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body
  const strategy = 'local'

  const { status, data } = await fetcher(`${Config.API_URL}/authentication`)
    .setCookies(req.cookies)
    .post({ strategy, email, password })

  res.status(status).json(data)
}

export default apiHandler({
  post: login,
})
