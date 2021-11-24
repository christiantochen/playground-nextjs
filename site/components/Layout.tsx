import Navbar from './Navbar'
import React, { FC } from 'react'
import cn from 'clsx'

const Layout: FC = ({ children }) => {
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
