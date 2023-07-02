import React from 'react'

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  }  

  return (
    <div className='footer-container'>
        <h4>
            Tech Digest &copy;{getYear()}
        </h4>
    </div>
  )
}

export default Footer