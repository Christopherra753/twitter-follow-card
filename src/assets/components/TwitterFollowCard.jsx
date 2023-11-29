import React, { useState } from 'react'

function TwitterFollowCard ({ username, name }) {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='flex items-center justify-between gap-5'>
      <header className='flex items-center gap-x-2'>
        <img src={`https://unavatar.io/${username}`} className='w-10 h-10 rounded-full' />
        <div className='flex flex-col'>
          <strong className='text-sm'>{name}</strong>
          <span className='text-sm text-gray-400'>@{username}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={`px-4 py-2 rounded-full text-sm bg-gray-200 text-black font-semibold ${isFollowing ? 'hover:bg-red-500 w-36 group' : 'hover:bg-blue-500'} hover:text-white transition-colors`}>
          <span className='block group-hover:hidden'>{isFollowing ? 'Siguiendo' : 'Seguir'}</span>
          <span className='hidden group-hover:block'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
