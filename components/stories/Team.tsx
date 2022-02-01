import { FunctionComponent } from 'react'
import TeamContainer from '~/components/elements/TeamContainer'

const Team: FunctionComponent = () => {
  return (
    <TeamContainer
      id="team"
      title="Meet the Team"
      items={[
        {
          image: 'https://lh3.googleusercontent.com/cuj35f7TVERNS-ypwEWON3wA4CRT9rrwnEWB3vdAC3OnR7TByv3yrFyZyvpMicsC2EdYtrHawXhEzoCWwqzDNBsV24SBGLb1kDgaxA=w600',
          title: 'Mary',
          role: 'Creative director',
          social: [
            'https://www.instagram.com/kriakiku/',
            'https://www.tiktok.com/@kriakiku',
            'https://1.envato.market/nft-pipistrelle',
          ]
        },
        {
          image: 'https://lh3.googleusercontent.com/kg-A4af5pIfGfb2qQ3YuRHL97g98ziQVUFuAbanyrQltEr9Kzs3rJOub7rr2gacUuy9PgeD1lu24p_H7tWZjK1xKp-srbKFHuEpN=w600',
          title: 'Gotlib',
          role: 'Artist/Animator',
          social: [
            'https://medium.com/',
            'https://www.tiktok.com/@kriakiku',
            'https://www.instagram.com/kriakiku/'
          ]
        },
        {
          image: 'https://lh3.googleusercontent.com/90MaVfN87DGP3I_c7CK0-S-jWLA8CTEja1xxFKtAJaeI2t5z9z5F9g4Ph6ZJsXVCVlnMfWjKJQxrycS6QIPxUuWp4hnU3ptUWggx6IM=w600',
          title: 'Alya',
          role: 'Dev/Techie',
          social: [
            'https://www.linkedin.com/',
            'https://medium.com/'
          ]
        },
        {
          image: 'https://lh3.googleusercontent.com/DEwYW2YzgdNQeNWzDnexr0kylmo-NZ2AI75_d6piM9lxx8YnzUz7vC5zs5_GO_XzbRAkbUUh5mGLRFWWoew4sw1r-SwR1UmAxfF0zQ=w600',
          title: 'Lucky',
          role: 'Frontend dev',
          social: [
            'https://medium.com/',
            'https://www.tiktok.com/@kriakiku',
            'https://youtube.com'
          ]
        },
        // {
        //   image: 'https://lh3.googleusercontent.com/RoFfvKqZOJg9q_z4_9k0x8ZlG1dqqP5jHRotn7VtoS0SGapemSzLVuPR5Oiryakx5TveO7UIKRBEew2w4ZX3WlopRRAdjJUiuFSq=w600',
        //   title: 'Kristina',
        //   role: 'Manager',
        //   social: [
        //     'https://twitter.com/',
        //     'https://facebook.com',
        //     'https://youtube.com'
        //   ]
        // },
        // {
        //   image: 'https://lh3.googleusercontent.com/tdgtAdY4YkpJmHlWe-m3g7NBA2stDCJHsesNOEotwyprE43_GBpgYWP3-_XgxIJCCdStjyccuKqI-B19syMDQvklrMaZjrRHUDNHpg=w600',
        //   title: 'Wild Cake',
        //   role: 'Curator/NFT expert',
        //   social: [
        //     'https://facebook.com',
        //     'https://www.linkedin.com/'
        //   ]
        // },
        // {
        //   image: 'https://lh3.googleusercontent.com/LjHTFxtTb_oe09-MgGIh8AXMqzNkTS2Kz3q0Jw1ltky2HpjSi3BOhGAoO7a5-aXRpCxWBt9tpSuPXdoadHSrYo_MG4D1CQjT44xIvc4=w600',
        //   title: 'Zorking',
        //   role: 'Backend & Game dev',
        //   social: [
        //     'https://www.linkedin.com/',
        //     'https://www.instagram.com/kriakiku/'
        //   ]
        // }
      ]}
    />
  )
}

export default Team
