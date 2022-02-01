import { FunctionComponent, useMemo } from 'react'
import styles from './Container.module.scss'

const ContainerHeading: FunctionComponent<ContainerHeadingProps> = ({ level = 1, children, ...props }) => {
  const Heading = useMemo(() => `h${level}` as keyof JSX.IntrinsicElements, [level])

  return (
    <Heading className={styles.heading} {...props}>
      <span className={styles.heading__inner}>
        {children}
      </span>
      <span className={styles.heading__overlay} aria-hidden="true">
        {children}
      </span>
    </Heading>
  )
}

interface ContainerHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export default ContainerHeading
