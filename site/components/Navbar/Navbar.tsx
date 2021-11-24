import cn from 'clsx'
import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Container } from '@playground/ui'
import Searchbar from '../Searchbar'
import Userbar from '../Userbar'
// import { Searchbar, UserNav } from '@components/common'

interface Props {}

const Navbar: FC<Props> = () => (
  <NavbarRoot>
    <Container className={cn('bg-primary shadow')}>
      <div className={cn(s.nav)}>
        <Link href="/">
          <a className="flex flex-0 items-center justify-center">Logo</a>
        </Link>
        <div className="flex flex-1 justify-center px-6">
          <Searchbar />
        </div>
        <div className="flex flex-0 items-center justify-end">
          <Userbar />
        </div>
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
