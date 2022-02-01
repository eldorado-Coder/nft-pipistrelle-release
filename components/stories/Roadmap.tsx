import { FunctionComponent } from 'react'
import TimelineContainer from '~/components/elements/TimelineContainer'

const Roadmap: FunctionComponent = () => {
  return (
    <TimelineContainer id="roadmap" title="Roadmap" items={[
      {
        image: 'https://lh3.googleusercontent.com/qDLIwHJ5_bAoRUtlSGZuM3jTU_KNTvoLvDQSH8vv6ReuuxNIXCmgUq37EprQduZr2_XJhFHSLCxwm2XD6MTD2TIR-o4kX7U5QQ2148I=w330',
        title: 'First 700 sales',
        content: (<>
          Holders Giveaway<br />
          OG Holders - Pioneers & Shelter HelperGiveaway
        </>)
      },
      {
        image: 'https://lh3.googleusercontent.com/o6APZAFIoXG-cY4qXVlImJGuxLqJaDmmE-E3fQVSCk-ZFOonys7bfWMMtjBxW22O-4-g6oOzjHt3IZM02XnjE7-M2dPcvss3EcFpbcM=w330',
        title: '1000 sales',
        content: 'Art contest'
      },
      {
        image: 'https://lh3.googleusercontent.com/Z6cwjBUqIQWoeA24Iri_D_b8uw_R2LvtJ22ciur9ZyHLRdjs6IkSwmU9JQZO8SkNyNCshZG9DMBVDiPg1B-lhG1tQdmgRUl5j50J-g=w330',
        title: '1500 sale',
        content: '2 Legendary monsters Giveaway'
      },
      {
        image: 'https://lh3.googleusercontent.com/sfX1s_hV9zcPQMH7NHHB7y041GtarRNYGO6ibZ_oh2SBNvnsBiAwYZxEzA2NiqfcvpTGQAJ6Dg-zwsm3EUwuCyd7haa9W9ZNbkbQ150=w330',
        title: '2000 christmas sales',
        content: 'Unique 1/1 Custom NFT designed specially for 5 holders (with their animal or another design'
      },
      {
        image: 'https://lh3.googleusercontent.com/bDUhgMzEZmqsqmxVeTH6TlZvVWARNPVN13Cn8e0S1Hor9NCIhtHxCaPMQgguQ7HxM7OHEFWArdvOUlTH8XJB_Fn1laVL6MR-r8Af=w330',
        title: '2500 sales',
        content: '2 Legendary monsters Giveaway'
      },
      {
        image: 'https://lh3.googleusercontent.com/zNjBdItP4cMzotosSDNsZm1bySmfc9xdHwwC0EzKKhMwEVVZjhG7PxapSE8yidq7HMNl1B8LbgPj42ZDHi6chH0K3dZPhbm8rB69Vg=w330',
        title: '3000 sales',
        content: 'Unique 1/1 NFT for Holders'
      },
      {
        image: 'https://lh3.googleusercontent.com/cUabcEQS1yFxENEZpb4FvoBfmHFQm3zTwHLL1rU07acT7CZ1hyzKrsr0ulxTIUUzmIz7NWviRuJVISIxIX6roS7Rk3CcJmxD9dgihg=w330',
        title: '4500 sales',
        content: 'Merch store (merch for members and their pets)'
      },
      {
        image: 'https://lh3.googleusercontent.com/y7XOxpLMGgDu0F2h5i0EU6o3yW0c2iS4kvKbdk0TmAv5N6Yijng1cF5Ov3vZqTjQkDVUf4d5IUPJTGZWA1GILTcq164X9XPOXQQS=w330',
        title: '5555 final sales',
        content: (<>
          Charity donation to animal shelters (Community votes)<br />
          Breeding system
        </>)
      }
    ]} />
  )
}

export default Roadmap
