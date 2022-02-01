import Head from 'next/head'
import { FunctionComponent } from 'react'
import MainFooter from '~/components/stories/MainFooter'
import MainNav from '~/components/stories/MainNav'
import styleVariables from '~/styles/variables.module.scss'


const BaseLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content={styleVariables.primaryColorDarken15}/>
      </Head>

      <MainNav />
      <main>
          { children }
      </main>
      <MainFooter />
    </>
  )
}

export default BaseLayout
