import { FC } from 'react'
import Link from 'next/link'
import cn from 'clsx'
import s from './UserNav.module.css'
import { FaHeart, FaRegComment, FaShoppingBasket, FaUser } from 'react-icons/fa'

interface Props {
  className?: string
}

const UserNav: FC<Props> = ({ className }) => {
  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href="/cart">
            <a aria-label="cart">
              <FaShoppingBasket />
            </a>
          </Link>
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
            <a aria-label="Wishlist">
              <FaHeart />
            </a>
          </Link>
        </li>
        <li className={s.item}>
          <Link href="/chat">
            <a aria-label="chat">
              <FaRegComment />
            </a>
          </Link>
        </li>
        <li className={s.item}>
          <Link href="/profile">
            <a aria-label="profile">
              <FaUser />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
