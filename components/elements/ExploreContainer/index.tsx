import { FunctionComponent, useMemo, useState } from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Container from '~/components/elements/Container';
import type{ Item } from '~/pages/api/items';
import styles from './ExploreContainer.module.scss'
import ExploreContainerBanner from './Banner';
import ExploreContainerList from './List';
import MarketplaceButton from '~/components/elements/MarketplaceButton';

const ExploreContainer: FunctionComponent<ExploreContainerProps> = ({ id, assets }) => {
  const [asset, setAsset] = useState(assets[0]);

  return (
    <>
      {/* List */}
      <ExploreContainerList assets={assets} pick={setAsset} />

      {/* Main */}
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={asset.id}
          classNames={{
            enter: styles['fade-enter'],
            enterActive: styles['fade-enter-active'],
            exit: styles['fade-exit'],
            exitActive: styles['fade-exit-active'],
          }}
          addEndListener={(node: any, done: any) => {
            node.addEventListener("transitionend", done, false);
          }}
        >
          <Container id={id} className={styles.container}>
            {/* Image */}
            <div className={styles.image}>
              <ExploreContainerBanner asset={asset} />
            </div>
            {/* Description */}
            <div className={styles.description}>
              <h1 className={styles.title}>{asset.title}</h1>
              <p>{asset.description}</p>

              {/* Properties */}
              {asset.properties.length > 0 ? (
                <ul className={styles.properties}>
                  {asset.properties.map((property, index) => (
                    <li className={styles.properties__item} key={index}>
                      <span className={styles.properties__label}>{property.title}: </span>
                      {property.value}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {/* Link */}
            <div className={styles.link}>
              <MarketplaceButton to={asset.link}>
                View details and purchase
              </MarketplaceButton>
            </div>
          </Container>
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}

interface ExploreContainerProps {
  id?: string,
  assets: Item[]
}

export default ExploreContainer
