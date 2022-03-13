import { Text } from '@playground/ui'
import { useRouter } from 'next/router'

export default function Posts() {
  const { query } = useRouter()

  return (
    <>
      <Text>Principle {query.id}</Text>
    </>
  )
}
