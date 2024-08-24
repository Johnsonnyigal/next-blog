import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-solid border-transparent'></div>
    </div>
  )
}

export default Loading