import { FunctionComponent } from 'react'
import Container from '~/components/elements/Container';
import styles from './AboutContainer.module.scss'
import type { Item } from '~/pages/api/items'

const AboutContainer: FunctionComponent<AboutContainerProps> = ({ id, beforeTitle, title, subtitle, children }) => {
  return (
    <div id={id} className={styles.container}>
      <Container>
        <div className={styles.grid}>
          {/* Content */}
          <div className={styles.content}>
            <h1 className={styles.title}>
              <span className={`base-text ${styles.title__before}`}>
                {beforeTitle}
              </span>
              {title}
            </h1>
            <div>{subtitle}</div>
          </div>
          {/* Inner */}
          <div className={styles.children}>
            { children }
          </div>
        </div>
      </Container>
    </div>
  )
}

interface AboutContainerProps {
  id?: string,
  beforeTitle?: string | React.ReactNode,
  title: string | React.ReactNode,
  subtitle: string | React.ReactNode,
}

export default AboutContainer
