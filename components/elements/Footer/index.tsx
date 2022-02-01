import Link from 'next/link'
import { FunctionComponent, useMemo } from 'react'
import { HiChevronUp } from 'react-icons/hi'
import Container from '~/components/elements/Container'
import Configuration from '~/utils/configuration'
import styles from './Footer.module.scss'

const Footer: FunctionComponent<FooterProps> = ({ id, title, content }) => {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <Container id={id} tag="footer">
      {/* Content */}
      <div className={styles.container}>
        {/* About */}
        <div role="banner" className={styles.about}>
          <h1 className={styles.title}>{title}</h1>
          {content}
        </div>
        {/* Back top */}
        <a href="#" className={styles['scroll-top']}>
          <HiChevronUp />
        </a>
      </div>
      {/* Copyright */}
      <div className={styles.copyright}>
        &copy; {year} — {Configuration.title}. All rights reserved.
      </div>
    </Container>
  )
}

interface FooterProps {
  id?: string
  title: string | React.ReactNode
  content: string | React.ReactNode
}

export default Footer
