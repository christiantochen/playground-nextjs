import fetcher, { simpleFetcher } from '../fetcher'
import { User } from '../types'
import useSWR from 'swr'

type State = { total: number; limit: number; skip: number; data: Array<User> }

const initialData: Omit<State, 'data'> & { users: Array<User> } = {
  total: 0,
  limit: 0,
  skip: 0,
  users: [],
}

function useUsers() {
  const { data, mutate: mutateUsers } = useSWR<State, any>(
    '/api/user',
    simpleFetcher,
    {
      shouldRetryOnError: false,
    }
  )

  let result = initialData

  if (data) {
    const { data: users, ...rest } = data
    result = {
      ...result,
      ...rest,
      users,
    }
  }

  return result
}

export default useUsers
