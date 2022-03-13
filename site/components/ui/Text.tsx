import cn from 'clsx'
import { FC, HTMLProps } from 'react'

type Props = HTMLProps<HTMLDivElement> & {}

const Text: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  )
}

export default Text
