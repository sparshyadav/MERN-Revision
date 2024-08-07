import React, { useEffect, useState } from 'react'
import RestrauntCard from './RestrauntCard'
import Shimmer from './Shimmer';

const Body = () => {
    const [resData, setResData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setResData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestraunts(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const filterTopRestraunts = () => {
        const filteredList = resData.filter((res) => (
            res.info.avgRating > 4.2
        ))

        setResData(filteredList);
    }

    const searchRestraunt = () => {
        const result = resData.filter((res) =>
            res.info.name.toLowerCase().includes(searchInput.toLowerCase())
        );

        setFilteredRestraunts(result);
    };


    if (resData.length === 0) {
        return (<Shimmer />);
    }

    return (
        <div className='body'>
            <div className="search">
                <input className='searchInput' type="text" placeholder='Search Your Favourite Restraunts' value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} />
                <button className='searchBtn' onClick={searchRestraunt}>Search</button>
                <button className='filterBtn' onClick={filterTopRestraunts}>Top Rated Restraunts</button>
            </div>
            <div className="resContainer">
                <div className="restraunts">
                    {
                        filteredRestraunts.map((restraunt) => <RestrauntCard key={restraunt.info.id} resData={restraunt} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Body
