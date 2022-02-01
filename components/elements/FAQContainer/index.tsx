import { FunctionComponent } from 'react'
import { HiChatAlt2, HiStar } from "react-icons/hi";
import Container from '~/components/elements/Container';
import ContainerHeading from '~/components/elements/Container/Heading';
import styles from './FAQContainer.module.scss'
import FAQContainerItem, { FAQContainerItemProps } from './Item';

const FAQContainer: FunctionComponent<FAQContainerProps> = ({ id, title, subtitle, items }) => {
  return (
    <div className={styles.overflow}>
      <Container id={id} padding>
        <ContainerHeading>{title}</ContainerHeading>
        {subtitle ? <p>{subtitle}</p> : ''}
        <ul className={styles.container}>
          {items.map((item, index) => (
            <FAQContainerItem key={index} {...item} opened={index === 0} />
          ))}
        </ul>
        <HiChatAlt2 className={`${styles.overlay} ${styles['overlay--top']}`} />
        <HiStar className={`${styles.overlay} ${styles['overlay--bottom']}`} />
      </Container>
    </div>
  )
}

interface FAQContainerProps {
  id?: string,
  title: string | React.ReactNode,
  subtitle?: string | React.ReactNode,
  items: FAQContainerItemProps[]
}

export default FAQContainer
