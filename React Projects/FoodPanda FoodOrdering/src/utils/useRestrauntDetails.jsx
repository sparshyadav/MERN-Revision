import { useEffect, useState } from "react";

const useRestrauntDetails = (resId) => {
    const [resDetails, setResDetails] = useState([]);

    const fetchMenu = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId);
        const data = await response.json();
        // console.log(data);
        setResDetails(data.data.cards[2].card.card.info);
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    return resDetails;
}

export default useRestrauntDetails;