'use client'
import React from 'react'
import { useState } from 'react'

const SearchBar = ({ getSearchResults }) => {
  const [searchTerm, setsearchTerm] = useState('');

  // This triggers on clicking the form button
  const handleSearch = async (e) => {
    // Stop browser reloading 
    e.preventDefault();
    // Get a response from the search endpoint
    const response = await fetch(`/api/articles/search?query=${searchTerm}`)
    // Save as JSON
    const data = await response.json()
    getSearchResults(data)
  }

  return (
    <div className='px-4 searchbar-container border-b'>
        <form>
            <input 
                type="text"
                className='searchbar-field'
                placeholder='Search for a title...'
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
            />
            <button onClick={handleSearch} className='border border-black border-solid rounded-md btn btn btn-searchbar' type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar