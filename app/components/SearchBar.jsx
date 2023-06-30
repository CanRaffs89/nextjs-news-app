import React from 'react'

const SearchBar = () => {
  return (
    <div className='searchbar-container'>
        <form>
            <input 
                type="text"
                className='searchbar-field'
                placeholder='Search here...'
                 
            />
            <button className='btn btn-searchbar' type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar