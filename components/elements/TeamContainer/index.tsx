import { FunctionComponent } from 'react'
import Container from '~/components/elements/Container';
import ContainerHeading from '~/components/elements/Container/Heading';
import TeamContainerItem, { TeamContainerItemProps } from './Item';
import styles from './TeamContainer.module.scss'

const TeamContainer: FunctionComponent<FAQContainerProps> = ({ id, title, items }) => {
  return (
    <Container id={id} padding>
      <ContainerHeading>{title}</ContainerHeading>
      <ul className={styles.container}>
        {items.map((item, index) => (
          <TeamContainerItem key={index} {...item} />
        ))}
      </ul>
    </Container>
  )
}

interface FAQContainerProps {
  id?: string,
  title: string | React.ReactNode,
  subtitle?: string | React.ReactNode,
  items: TeamContainerItemProps[]
}

export default TeamContainer
