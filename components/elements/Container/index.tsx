import { FunctionComponent, useMemo } from 'react'
import styles from './Container.module.scss'

const Container: FunctionComponent<ContainerProps> = ({ id, padding, margin, className, children, tag = 'article' }) => {
  const Tag = useMemo(() => tag as keyof JSX.IntrinsicElements, [tag])
  
  return (
    <Tag 
      id={id} 
      className={`${styles.container} ${padding ? styles.padding : ''} ${margin ? styles.margin : ''} ${className || ''}`}
    >
      {children}
    </Tag>
  )
}

interface ContainerProps {
  id?: string
  padding?: boolean
  margin?: boolean
  tag?: string
  className?: string
}

export default Container
