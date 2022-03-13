import { Text } from '@playground/ui'
import { Layout } from '@components'
import { usePrinciples } from '@playground/tabsquare'

export default function Principle() {
  const { principles } = usePrinciples()
  return (
    <>
      <Text>Principle</Text>
      {principles?.map &&
        principles.map((principle: any) => (
          <Text key={principle.id}>{principle.name}</Text>
        ))}
    </>
  )
}

Principle.Layout = Layout
