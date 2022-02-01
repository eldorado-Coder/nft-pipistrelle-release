import Document, { Html, Head, Main, NextScript } from 'next/document'
import Configuration from '~/utils/configuration'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content={Configuration.description} />
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
          <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@342;458&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet" />
          {/* <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument