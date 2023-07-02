import React from 'react'
import { CiDark } from 'react-icons/ci'

const Navbar = () => {
  return (
    <div className='navbar-container border-b'>
        <h2>Tech Digest</h2>
        <button className='btn btn-dark-mode border'>
          <CiDark/>
        </button>
    </div>
  )
}

export default Navbar