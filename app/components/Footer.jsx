import React from 'react'

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  }  

  return (
    <div className='px-4 py-5 flex w-full justify-center items-center'>
        <h4>
            Tech Digest &copy;{getYear()}
        </h4>
    </div>
  )
}

export default Footer