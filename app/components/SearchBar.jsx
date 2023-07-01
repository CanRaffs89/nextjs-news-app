import React from 'react'

const SearchBar = () => {
  return (
    <div className='searchbar-container border-b'>
        <form>
            <input 
                type="text"
                className='searchbar-field'
                placeholder='Search here...'
                 
            />
            <button className='btn btn-searchbar border' type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar