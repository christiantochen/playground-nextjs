import cn from 'clsx'
import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: (...args: any[]) => any
  floating?: boolean
}

const Input: FC<InputProps> = (props) => {
  const { className, children, onChange, value, ...rest } = props
  const [active, setActive] = useState(!!value)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value)
    setActive(!!e.target.value)
  }

  return (
    <div>
      <input
        className={cn(
          'bg-primary py-2 px-6 w-full appearance-none transition duration-150 ease-in-out pr-10 border border-accent-3 text-accent-6',
          'focus:outline-none focus:shadow-outline-normal',
          className
        )}
        onChange={handleOnChange}
        value={value}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
      {children && <label>{children}</label>}
    </div>
  )
}

export default Input
