import { FunctionComponent, useMemo } from 'react'
import Image from 'next/image'
import { useHover } from 'web-platform-alpha'
import styles from './TeamContainer.module.scss'
import SocialLink from '../SocialLink'
import Configuration from '~/utils/configuration'

const TeamContainerItem: FunctionComponent<TeamContainerItemProps> = ({ image, title, role, social }) => {
  const { hoverProps, isHovered } = useHover({});
  const side = useMemo(() => isHovered ? ['left', 'right'][Math.round(Math.random())] : 0, [ isHovered ]);

  return (
    <li className={`${styles.item} ${side ? styles[`item--${side}`] : ''}`} {...hoverProps}>
      <Image 
        src={image} 
        alt={`${title} furson`}
        width="330"
        height="330"
        className={styles.image}
        priority
        unoptimized={Configuration.unoptimizedImages}
        loader={Configuration.imagesLoader}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{role}</p>
        {social && social.length > 0 ? (
          <div aria-label="Social networks">
            {social.map((link, index) => <SocialLink link={link} key={index} />)}
          </div>
        ) : null}
      </div>
    </li>
  )
}

export interface TeamContainerItemProps {
  image: string,
  title: string | React.ReactNode,
  role: string | React.ReactNode,
  social?: string[]
}

export default TeamContainerItem
