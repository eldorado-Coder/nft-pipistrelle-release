import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Configuration from '~/utils/configuration'
import BaseLayout from '~/components/layouts/BaseLayout'
import FAQ from '~/components/stories/FAQ'
import Team from '~/components/stories/Team'
import About from '~/components/stories/About'
import { fetchItems, Item } from '~/pages/api/items'
import { useEffect, useState } from 'react'
import Roadmap from '~/components/stories/Roadmap'
import Explore from '~/components/stories/Explore'

interface Props {
  assets?: Item[];
}

const Home: NextPage<Props> = ({ assets: initialAssets = [] }) => {
  const [assets, setAssets] = useState(initialAssets)

  useEffect(() => {
    if (assets.length === 0 && typeof window !== 'undefined') {
      fetch('/api/items')
        .then(response => response.json())
        .then(setAssets)
    }
  }, [])

  if (assets.length === 0) {
    return null
  }

  return (
    <BaseLayout>
      <Head>
        <title>{Configuration.title}</title>
      </Head>

      {/* About */}
      <About />

      {/* Explore */}
      <Explore assets={assets} />

      {/* Roadmap */}
      <Roadmap />

      {/* FAQ */}
      <FAQ />

      {/* Team */}
      <Team />
      
    </BaseLayout>
  )
}

Home.getInitialProps = async function getInitialProps (context: NextPageContext) {
  try {
    const assets = await fetchItems()

    if (assets.length > 0) {
      context.res?.setHeader('Cache-Control', 'public, maxage=300, s-maxage=600, stale-while-revalidate=21600');
    }

    return { assets }
  } catch {
    return { assets: [] }
  }
}

export default Home
