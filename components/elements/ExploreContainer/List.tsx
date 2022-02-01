import { FunctionComponent, useMemo, useState } from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee"
import styles from './ExploreContainerList.module.scss'
import type { Item } from '~/pages/api/items'
import Configuration from '~/utils/configuration'

const ExploreContainerListImage: FunctionComponent<{ asset: Item }> = ({ asset }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      onLoadingComplete={() => setLoaded(true)}
      className={`${styles.loader} ${loaded ? styles['loader--loaded'] : ''}`}
      src={asset.image} 
      alt={asset.title}
      width="142"
      height="142"
      loading="lazy"
      quality="50"
      unoptimized={Configuration.unoptimizedImages}
      loader={Configuration.imagesLoader}
    />
  )
}

const ExploreContainerList: FunctionComponent<ExploreContainerListProps> = ({ assets, pick }) => {
  const filledAssets = useMemo(() => {
    const items = []
    while (true) {
      items.push(...assets.slice(0, 30 - items.length))

      if (items.length >= 30 || assets.length === 0) {
        break
      }
    }

    return items
  }, [assets])

  return (
    <div className={styles.isolation}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <Marquee gradient={false}>
            {filledAssets.map((asset, index) => (
              <a 
                key={index} 
                href="#explore" 
                className={styles.item}
                onClick={() => pick(asset)}
              >
                <ExploreContainerListImage asset={asset} />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

interface ExploreContainerListProps {
  assets: Item[]
  pick: Function
}

export default ExploreContainerList
