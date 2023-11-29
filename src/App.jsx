import React from 'react'
import TwitterFollowCard from './assets/components/TwitterFollowCard'

function App () {
  return (
    <section className='flex flex-col gap-5  pt-20'>
      <TwitterFollowCard name='Miguel Angel Duran' username='midudev' />
      <TwitterFollowCard name='Pablo Hernadez' username='pheralb' />
      <TwitterFollowCard name='Elon Musk' username='elonmusk' />
      <TwitterFollowCard name='Vanderhart' username='vxnder' />
    </section>
  )
}

export default App
