import { FunctionComponent, useCallback, useMemo, useRef, useState } from 'react'
import { Collapse } from 'react-collapse';
import { usePress } from 'web-platform-alpha';
import styles from './FAQContainer.module.scss'

const FAQContainerItem: FunctionComponent<FAQContainerItemProps> = ({ title, content, opened }) => {
  const [isOpened, setIsOpened] = useState(opened || false);
  const toggle = useCallback(() => setIsOpened(!isOpened), [isOpened])
  const { pressProps } = usePress({ onPress: toggle })

  return (
    <li className={styles.item}>
      <h3 className={styles.title} {...pressProps} tabIndex={0}>{title}</h3>
      <Collapse 
        isOpened={isOpened} 
        theme={{ collapse: styles.content, content: styles.content__inner }}
      >
        {content}
      </Collapse>
    </li>
  )
}

export interface FAQContainerItemProps {
  opened?: boolean
  title: string | React.ReactNode
  content: string | React.ReactNode
}

export default FAQContainerItem
