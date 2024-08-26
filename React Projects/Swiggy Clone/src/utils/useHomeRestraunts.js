import { useState, useEffect } from "react";

const useHomeRestraunts = () => {
    const [restraunts, setRestraunts] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=30.4765796&lng=76.5905317");
        const data = await response.json();
        setRestraunts(data.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return restraunts;
}

export default useHomeRestraunts;