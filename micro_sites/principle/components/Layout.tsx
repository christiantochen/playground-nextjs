import Navbar from './Navbar'
import React, { FC } from 'react'
import cn from 'clsx'
import { useAuth } from '@playground/tabsquare'

const Layout: FC = ({ children }) => {
  useAuth({ redirectTo: 'login', redirectIfFound: false })

  return (
    <div
      className={cn(
        'h-full mx-auto transition-colors duration-150 max-w-screen-sm'
      )}
    >
      <Navbar />
      <main className="fit">{children}</main>
    </div>
  )
}

export default Layout
