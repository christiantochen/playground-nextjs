import { Input, Text } from '@components/ui'
import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

const LoginPage: FC = () => {
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
        <div className="flex flex-col space-y-2">
          <Text className="text-sm text-center font-bold uppercase">Login</Text>
          <div className="space-y-2">
            <Input placeholder="Email" floating />
            <Input placeholder="Password" type="password" floating />
          </div>
          <div className="flex flex-row justify-between py-4">
            <Text className="text-sm">Remember Me</Text>
            <Text className="text-sm">Forgot Password</Text>
          </div>
          <button
            className="p-2 rounded-full border-2 border-solid uppercase font-bold"
            style={{
              borderColor: 'rgba(255, 107, 0)',
              backgroundColor: 'rgba(255, 107, 0, 0.15)',
              color: 'rgba(255, 107, 0)',
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
