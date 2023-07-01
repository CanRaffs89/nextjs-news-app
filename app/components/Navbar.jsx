import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar-container border-b'>
        <h2>News App</h2>
        <Link className='btn border' href='/'>Link</Link>
    </div>
  )
}

export default Navbar