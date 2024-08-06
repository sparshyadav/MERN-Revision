import React, { useEffect, useState } from 'react'
import RestrauntCard from './RestrauntCard'

const Body = () => {
    const [resData, setResData] = useState([
        {
            "info":{
                "id":"1",
                "name": "Oye Hoye Paratha",
                "cuisines": [
                    "North Indian",
                    "Mughlai"
                ],
                "cloudinaryImageId": "ht5olqynpo0r3z3vhnre",
                "avgRating": 4.5,
            }
        },
        {
            "info":{
                "id":"2",
                "name": "Sarovar Portico",
                "cuisines": [
                    "Asian",
                    "Chinese"
                ],
                "cloudinaryImageId": "ojccj2pdugzpcs8wpm5a",
                "avgRating": 4.2
            }
        },
        {
            "info":{
                "id":"3",
                "name": "Dhaba Singh Darbar",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Snacks",
                    "Sweets"
                ],
                "cloudinaryImageId": "ckvrraxwm26x9uzpbfvd",
                "avgRating": 3.9
            }
        },
        {
            "info":{
                "id":"4",
                "name": "Singh Darbar Sweets",
                "cuisines": [
                    "Sweets",
                    "Snacks",
                    "Chinese"
                ],
                "cloudinaryImageId": "pr8vq3b9bzijp3ovn3yo",
                "avgRating": 4
            }
        },
        {
            "info":{
                "id":"5",
                "name": "Oye Hoye Paratha",
                "cuisines": [
                    "North Indian",
                    "Mughlai"
                ],
                "cloudinaryImageId": "ht5olqynpo0r3z3vhnre",
                "avgRating": 4.5
            }
        },
        {
            "info":{
                "id":"6",
                "name": "Sarovar Portico",
                "cuisines": [
                    "Asian",
                    "Chinese"
                ],
                "cloudinaryImageId": "ojccj2pdugzpcs8wpm5a",
                "avgRating": 4.2
            }
        },
        {
            "info":{
                "id":"7",
                "name": "Dhaba Singh Darbar",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Snacks",
                    "Sweets"
                ],
                "cloudinaryImageId": "ckvrraxwm26x9uzpbfvd",
                "avgRating": 3.9
            }
        },
        {
            "info":{
                "id":"8",
                "name": "Singh Darbar Sweets",
                "cuisines": [
                    "Sweets",
                    "Snacks",
                    "Chinese"
                ],
                "cloudinaryImageId": "pr8vq3b9bzijp3ovn3yo",
                "avgRating": 4
            }
        },
        {
            "info":{
                "id":"9",
                "name": "Oye Hoye Paratha",
                "cuisines": [
                    "North Indian",
                    "Mughlai"
                ],
                "cloudinaryImageId": "ht5olqynpo0r3z3vhnre",
                "avgRating": 4.5
            }
        },
        {
            "info":{
                "id":"10",
                "name": "Sarovar Portico",
                "cuisines": [
                    "Asian",
                    "Chinese"
                ],
                "cloudinaryImageId": "ojccj2pdugzpcs8wpm5a",
                "avgRating": 4.2
            }
        },
        {
            "info":{
                "id":"11",
                "name": "Dhaba Singh Darbar",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Snacks",
                    "Sweets"
                ],
                "cloudinaryImageId": "ckvrraxwm26x9uzpbfvd",
                "avgRating": 3.9
            }
        },
        {
            "info":{
                "id":"12",
                "name": "Singh Darbar Sweets",
                "cuisines": [
                    "Sweets",
                    "Snacks",
                    "Chinese"
                ],
                "cloudinaryImageId": "pr8vq3b9bzijp3ovn3yo",
                "avgRating": 4
            }
        },
    ]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData=async()=>{
        const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data=await response.json();
        // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setResData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const filterTopRestraunts=()=>{    
        const filteredList=resData.filter((res)=>(
            res.info.avgRating>4.2
        ))

        setResData(filteredList);
    }
    return (
        <div className='body'>
            <div className="search">
                <input className='searchInput' type="text" placeholder='Search Your Favourite Restraunts' />
                <button className='searchBtn'>Search</button>
                <button className='filterBtn' onClick={filterTopRestraunts}>Top Rated Restraunts</button>
            </div>
            <div className="resContainer">
                <div className="restraunts">
                {   
                    resData.map((restraunt)=> <RestrauntCard key={restraunt} resData={restraunt} />)
                }
                </div>
            </div>
        </div>
    )
}

export default Body
