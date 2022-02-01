import { FunctionComponent } from 'react'
import FAQContainer from '~/components/elements/FAQContainer'

const FAQ: FunctionComponent = () => {
  return (
    <FAQContainer
      id="faq"
      title="FAQs"
      subtitle="Here are some of the most asked questions our team has received during the process of making this project, check out our responses below!"
      items={[
        {
          title: 'Why do I need a monster?',
          content: (
            <>
              Monster Shelter is more than an art project, it is a game and discord bot! The monsters will be tied to a p2e game with elements of the RPG and Tamagotchi, which is in its early stages of development. The economic part will be built around the $TROPHY usability token, and the first stage with the farming part will become available after the main sale. Later you will be able to feed, care for and improve your monster. We also want to <a href="#">make a bot</a> for the convenience of our community members there. Discord bot will repeat the browser game mechanics and will be released with a slight delay from the browser game. This will be the start of a long journey for Monster Shelter.
            </>
          )
        },
        {
          title: 'Can I trade my monsters?',
          content: 'Of course! Monsters will be distributed according to the ERC-721 standard. You will be able to trade them on platforms like OpenSea.'
        },
        {
          title: 'What is a Tamagotchi game and discord bot?',
          content: 'Monster Shelter is a p2e game with Tamagotchi elements. The NFT you minted is tied to the game and becomes your pet. By sending a monster to the Hunt, you will earn $TROPHY utility tokens, which in the future you can exchange and spend in the in-game store for useful items and rare NFT. Parallel to this, you will need to take care of the pet, feed it, raise its level, send it to wild duels and climb the leaderboard. A breeding system will also be introduced in one of the future updates. The bot will be a copy of the browser game for Discord server.'
        },
        {
          title: 'Will there be P2E?',
          content: 'Yes! The economic basis of the game - $TROPHY utility tokens. All monsters holders will be able to receive it. To do this, you will need to send the monster to the Hunt, where he will mine $TROPHY. Hunting is the main mechanic of earning tokens and includes an element of randomness. At the first stage of the game, holders will have the opportunity to collect tokens for the further game. Later they will be able to use them to exchange or purchase various useful items and rare NFT prizes in the in-game store. Who started earlier will be in a better position in the future, you can already accumulate start-up capital while waiting for updates. Beyond the fundamental P2E mechanics, the goal of our development is to create a comfortable environment for you to have a good time, make new friends and get passive profit. This game will delight Tamagotchi fans!'
        },
        {
          title: 'When is the game release?',
          content: 'The game itself is in an early stage of development. After the main sale, the first stage of the game will open. You will have the opportunity to send a monster on a hunt to farm tokens in several different locations. With updates, we will add new features: wild duels, in-game store, breeding and much more! We want to provide you with a quality and profitable product, so we don’t want to rush and plan a long and confident development together with the community. Main game mechanics will be introduced in the first half of 2022.'
        },
        {
          title: 'Will it be possible to influence the development of the project?',
          content: 'Yes! Based on the feedback and discussions of our members in social networks and chats, we will adjust the development of the project, add new game mechanics and change the current ones.'
        },
        {
          title: 'How will donations be made?',
          content: 'After the main sale, when the 100% target is reached, we make a large donation to several worldwide animal-related organizations. The community will choose by voting where exactly to donate the money. But we do not want this to be a one-time promotion, as animals need food and care every day. Therefore, on a monthly basis, we will donate a percentage of secondary sales, also electing organizations by voting among the community.'
        }
      ]} 
    />
  )
}

export default FAQ
