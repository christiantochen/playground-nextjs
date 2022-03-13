import { Layout } from '@components'
import { Text } from '@playground/ui'
import { useUsers } from '@playground/tabsquare'
import type { User } from '@playground/tabsquare'

export default function Home() {
  const { users } = useUsers()

  return (
    <>
      <div>
        <Text>Home</Text>
        {users?.map &&
          users.map((user: User) => <Text key={user.id}>{user.email}</Text>)}
      </div>
    </>
  )
}

Home.Layout = Layout
