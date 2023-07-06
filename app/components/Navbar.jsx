import React from 'react'
import { CiDark } from 'react-icons/ci'

const Navbar = () => {
  return (
    <div className='text-2xl font-bold px-4 py-5 flex w-full justify-between items-center border-b'>
        <h2>Tech Digest</h2>
        <button className='border border-black border-solid rounded-md btn btn-dark-mode'>
          <CiDark/>
        </button>
    </div>
  )
}

export default Navbar