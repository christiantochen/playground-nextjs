import { getCookie, setCookies } from 'cookies-next'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import fetcher from '../fetcher'

function useAuth({
  redirectTo,
  redirectIfFound,
}: {
  redirectTo?: string
  redirectIfFound?: boolean
}) {
  const [token, setToken] = useState(getCookie('token'))
  const hasToken = Boolean(token)

  useEffect(() => {
    if (!redirectTo) return
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasToken) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasToken)
    ) {
      Router.push(redirectTo)
    }
  }, [redirectTo, redirectIfFound, hasToken])

  const login = (email: string, password: string) =>
    fetcher<{ accessToken: string }>(`/api/authentication`)
      .post({
        email,
        password,
      })
      .then(({ data }) => {
        if (data.accessToken) {
          setToken(data.accessToken)
          setCookies('token', data.accessToken)
        }
      })

  return {
    login,
  }
}

export default useAuth
