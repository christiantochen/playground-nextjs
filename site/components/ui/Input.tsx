import cn from 'clsx'
import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: (...args: any[]) => any
  floating?: boolean
}

const Input: FC<InputProps> = (props) => {
  const {
    className,
    children,
    onChange,
    value,
    name,
    type,
    floating,
    placeholder,
  } = props
  const [active, setActive] = useState(!!value)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value)
    setActive(!!e.target.value)
  }

  return (
    <div className="relative border rounded bg-primary border-gray-900 border-opacity-25">
      <input
        className={cn(
          'outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out p-2 z-10 relative',
          { 'pt-6': floating && active }
        )}
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={floating ? '' : placeholder}
        onChange={handleOnChange}
      />
      {floating && (
        <label
          className={cn(
            'absolute top-0 left-0 flex items-center text-opacity-50 p-2 transition-all duration-200 ease-in-out z-0',
            { 'text-xs': active, 'text-sm': !active }
          )}
          htmlFor={name}
        >
          {children || placeholder}
        </label>
      )}
    </div>
  )
}

export default Input
