import { Text } from '@playground/ui'
import { getCookie } from 'cookies-next'

export default function Blog() {
  return (
    <>
      <Text>Blog {getCookie('myCookie')}</Text>
    </>
  )
}
