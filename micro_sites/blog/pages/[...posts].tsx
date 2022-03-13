import { Text } from '@playground/ui'
import { useRouter } from 'next/router'

export default function Posts() {
  const { query } = useRouter()

  return (
    <>
      <Text>Blog Posts {query.posts}</Text>
    </>
  )
}
