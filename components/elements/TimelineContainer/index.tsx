import { FunctionComponent } from 'react'
import Container from '~/components/elements/Container';
import ContainerHeading from '~/components/elements/Container/Heading';
import TimelineContainerItem, { TimelineContainerItemProps } from './Item';
import styles from './TimelineContainer.module.scss'

const TimelineContainer: FunctionComponent<TimelineContainerProps> = ({ id, title, items }) => {
  return (
    <div className={styles.overlay}>
      <Container id={id} padding>
        <ContainerHeading>{title}</ContainerHeading>
        <ul className={styles.container} style={{ '--length': items.length } as React.CSSProperties}>
          {items.map((item, index) => (
            <TimelineContainerItem key={index} index={index} {...item} />
          ))}
        </ul>
      </Container>
    </div>
  )
}

interface TimelineContainerProps {
  id?: string,
  title: string | React.ReactNode,
  items: TimelineContainerItemProps[]
}

export default TimelineContainer
