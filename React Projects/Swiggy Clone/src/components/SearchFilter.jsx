import React from 'react'

const SearchFilter = () => {
    return (
        <div className="h-28 flex gap-20">
            <input className='block h-[50px] w-96 py-2 px-4 border-2 border-solid border-gray-400 rounded-sm shadow-sm pl-4' type="text" placeholder='Search Your Favourite Restraunts' value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} />
            <button className='bg-[#EF6139] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded h-[50px]' onClick={searchRestraunt}>Search</button>
            <button className='bg-[#EF6139] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded h-[50px]' onClick={filterTopRestraunts}>Top Rated Restraunts</button>
        </div>
    )
}

export default SearchFilter
