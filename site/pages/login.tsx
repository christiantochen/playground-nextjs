import cn from 'clsx'
import Image from 'next/image'
import { FC, MouseEvent, useState } from 'react'
import { useAuth } from '@playground/tabsquare'
import { Input, Text } from '@playground/ui'
import Button from '@components/Button'

const LoginPage: FC = () => {
  const { login } = useAuth({ redirectTo: '/', redirectIfFound: true })
  const [email, setEmail] = useState('admin@tabsquare.com')
  const [password, setPassword] = useState('demo')
  const [loading, setLoading] = useState(false)

  const onClickLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    login(email, password).then(() => setLoading(false))
  }

  return (
    <div
      className={cn(
        'bg-login-background h-screen',
        'flex flex-col items-center'
      )}
      style={{
        backgroundOrigin: 'padding-box',
        backgroundPositionX: '50%',
        backgroundPositionY: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="space-y-8 mt-28" style={{ width: 350 }}>
        <div className="flex flex-col space-y-2">
          <Image src={'/logo.svg'} alt="logo" width={250} height={30} />
          <Text className="text-sm text-center">
            Welcome to <b>Tabsquare HQ Module</b>
          </Text>
        </div>
        <form className="flex flex-col space-y-2">
          <Text className="text-sm text-center font-bold uppercase">Login</Text>
          <div className="space-y-2">
            <Input
              placeholder="Email"
              value={email}
              onChange={setEmail}
              floating
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={setPassword}
              floating
            />
          </div>
          <div className="flex flex-row justify-between py-4">
            <Text className="text-sm">Remember Me</Text>
            <Text className="text-sm">Forgot Password</Text>
          </div>
          <Button
            variant="slim"
            disabled={loading}
            loading={loading}
            onClick={onClickLogin}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
