import fetcher, { simpleFetcher } from '../fetcher'
import useSWR from 'swr'

type State = { total: number; limit: number; skip: number; data: Array<any> }

const initialData: Omit<State, 'data'> & { principles: Array<any> } = {
  total: 0,
  limit: 0,
  skip: 0,
  principles: [],
}

function usePrinciples() {
  const { data, mutate: mutateUsers } = useSWR<State, any>(
    '/principles/api/principles',
    simpleFetcher,
    {
      shouldRetryOnError: false,
    }
  )

  let result = initialData

  if (data) {
    const { data: principles, ...rest } = data
    result = {
      ...result,
      ...rest,
      principles,
    }
  }

  return result
}

export default usePrinciples
