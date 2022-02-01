import { FunctionComponent, useMemo } from 'react'
import { HiGlobe } from "react-icons/hi";
import { SiTiktok, SiYoutube, SiInstagram, SiFacebook, SiTwitter, SiDiscord, SiLinkedin, SiMedium } from "react-icons/si";
import styles from './SocialLink.module.scss'

const SocialLink: FunctionComponent<SocialLinkProps> = ({ link, large }) => {
  const domain = useMemo(() => new URL(link).host.replace('www.', ''), [link])
  const Icon = useMemo(() => {
    switch (domain) {
      case 'tiktok.com':
        return SiTiktok
      case 'youtu.be':
      case 'youtube.com':
        return SiYoutube
      case 'instagram.com':
        return SiInstagram
      case 'facebook.com':
        return SiFacebook
      case 'twitter.com':
        return SiTwitter
      case 'discord.com':
        return SiDiscord
      case 'linkedin.com':
        return SiLinkedin
        case 'medium.com':
          return SiMedium
      default:
        return HiGlobe
    }
  }, [domain])


  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`${styles.content} ${large ? styles['content--large'] : ''}`}>
      <Icon role="img" aria-label={domain} className={styles.icon} />
    </a>
  )
}

interface SocialLinkProps {
  link: string,
  large?: boolean
}

export default SocialLink
