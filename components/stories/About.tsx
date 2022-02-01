import { FunctionComponent } from 'react'
import AboutContainer from '~/components/elements/AboutContainer'
import Configuration from '~/utils/configuration'
import type { Item } from '~/pages/api/items'

const About: FunctionComponent = () => {
  return (
    <AboutContainer
      id="about"
      beforeTitle="Welcome to"
      title={Configuration.title}
      subtitle={(
        <div>
          <p>
            In one night seemingly creepy but very cute monsters filled the streets of cities all over the world. 
            Every creature needs a home, so an unknown organization called Monster Shelter set itself the goal of putting these small critters in good hands...
          </p>
          <p>
            Monster Shelter is a generative collection of animated monsters NFT with a variety of colorful backgrounds, 
            inspired by horror culture. Each monster has up to 10 traits on itself and its own color palette, 
            creating an individual appearance and character of the animal.
          </p>
          <p>
            After the launch monsters will become playable characters in our Tamagotchi P2E game.
          </p>
        </div>
      )}
    >
      <div>
        <iframe style={{ aspectRatio: '560 / 315', width: '100%' }} src="https://www.youtube-nocookie.com/embed/ysuZ_SW2bK0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </AboutContainer>
  )
}

export default About
