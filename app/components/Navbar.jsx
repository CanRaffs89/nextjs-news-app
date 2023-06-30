import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <h2>News App</h2>
        <Link className='btn' href='/'>Link</Link>
    </div>
  )
}

export default Navbar