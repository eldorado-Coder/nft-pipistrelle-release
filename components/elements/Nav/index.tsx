import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import Container from '../Container'
import styles from './Nav.module.scss'

const Nav: FunctionComponent<NavProps> = ({ logo, items, button }) => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.container} tag="div">
        {/* Logo */}
        <Link href={logo.href}>
          <a className={`${styles.logo} title`}>
            {logo.title}
          </a>
        </Link>
        {/* Items */}
        <ul className={styles.items}>
          {items.map((item, key) => (
            <li key={key} className={styles.item}>
              <Link href={item.href}>
                <a className={styles.item__inner}>
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {/* Button */}
        <Link href={button.href}>
          <a className={styles.button}>
            {button.title}
          </a>
        </Link>
      </Container>
    </nav>
  )
}


interface Link {
  title: string,
  href: string
}

interface NavProps {
  logo: Link,
  items: Link[],
  button: Link
}

export default Nav
