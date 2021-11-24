import { Layout } from '@components'
import { Text } from '@playground/ui'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
      <Text>Not Found</Text>
      <Text>The requested page doesn't exist or you don't have access to it.</Text>
    </div>
  )
}

NotFound.Layout = Layout
