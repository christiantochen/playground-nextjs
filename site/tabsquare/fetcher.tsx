import Config from './config'

const withQueryString = (url: RequestInfo, params?: any) => {
  if (!params) return url
  const keys = Object.keys(params)
  if (keys.length <= 0) return url

  return `${url}?${keys
    .filter((key) => params[key] !== undefined)
    .map((key) => key + '=' + params[key])
    .join('&')}`
}

const withCookies = (cookies: any, options?: any) => {
  if (!cookies) return options

  const { token } = cookies
  let headers = options?.headers || {}

  if (token) headers['Authorization'] = `Bearer ${token}`

  return { ...options, headers }
}

async function jsonParser<T = any>(
  resp: Response
): Promise<{ ok: boolean; status: number; data: any }> {
  const data = (await resp.json()) as T
  return { ok: resp.ok, status: resp.status, data }
}

function request<T = any>(url: RequestInfo, options?: RequestInit) {
  let requestOptions = {
    ...options,
    headers: {
      ...options?.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  if (options?.body) {
    requestOptions.body = JSON.stringify(options?.body)
  }

  return fetch(url, requestOptions).then((...props) => jsonParser<T>(...props))
}

function fetcherWithCookiesParams<T = any>(
  url: RequestInfo,
  cookies?: string,
  params?: string
) {
  return {
    get: (params?: any, options?: RequestInit) =>
      request<T>(
        withQueryString(url, params),
        withCookies(cookies, { ...options, method: 'GET' })
      ),
    post: (body?: any, options?: RequestInit) =>
      request<T>(
        withQueryString(url, params),
        withCookies(cookies, { ...options, body, method: 'POST' })
      ),
    put: (body?: any, options?: RequestInit) =>
      request<T>(
        withQueryString(url, params),
        withCookies(cookies, { ...options, body, method: 'PUT' })
      ),
    patch: (body?: any, options?: RequestInit) =>
      request<T>(
        withQueryString(url, params),
        withCookies(cookies, { ...options, body, method: 'PATCH' })
      ),
    delete: (options: RequestInit) => () =>
      request<T>(
        withQueryString(url, params),
        withCookies(cookies, { ...options, method: 'DELETE' })
      ),
  }
}

function fetcher<T = any>(
  url: RequestInfo,
  options?: { cookies: any; params: any }
) {
  const setCookies = (cookies: any) =>
    fetcher<T>(url, { cookies, params: options?.params })
  const setParams = (params: any) =>
    fetcher<T>(url, { cookies: options?.cookies, params })

  return {
    setCookies,
    setParams,
    ...fetcherWithCookiesParams<T>(url, options?.cookies, options?.params),
  }
}

export const simpleFetcher = (url: string, options?: any) =>
  request(url, options).then(({ data }) => data)

export default fetcher
