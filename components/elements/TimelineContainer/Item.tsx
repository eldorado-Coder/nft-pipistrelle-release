import { FunctionComponent, useMemo } from 'react'
import Image from 'next/image'
import { useHover } from 'web-platform-alpha'
import styles from './TimelineContainer.module.scss'
import SocialLink from '../SocialLink'
import Configuration from '~/utils/configuration'

const TimelineContainerItem: FunctionComponent<TimelineContainerItemProps> = ({ index, image, title, content }) => {
  const { hoverProps, isHovered } = useHover({});
  const side = useMemo(() => isHovered ? ['left', 'right'][Math.round(Math.random())] : 0, [ isHovered ]);

  return (
    <li className={styles.item} {...hoverProps} style={{ '--index': index } as React.CSSProperties}>
      {/* Image */}
      <div className={styles.item__image}>
        <Image 
          src={image} 
          alt={`Timeline ${index} step`}
          width="330"
          height="330"
          priority
          unoptimized={Configuration.unoptimizedImages}
          loader={Configuration.imagesLoader}
        />
      </div>
      {/* Title */}
      <h2 className={styles.item__title}>{title}</h2>
      {/* Content */}
      <div className={styles.item__inner}>
        {content}
      </div>
    </li>
  )
}

export interface TimelineContainerItemProps {
  index?: number,
  image: string,
  title: string | React.ReactNode,
  content: string | React.ReactNode
}

export default TimelineContainerItem
