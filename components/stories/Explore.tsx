import { FunctionComponent } from 'react'
import ExploreContainer from '~/components/elements/ExploreContainer'
import type { Item } from '~/pages/api/items'

const Explore: FunctionComponent<{ assets: Item[] }> = ({ assets }) => {
  return (
    <ExploreContainer id="explore" assets={assets} />
  )
}

export default Explore
