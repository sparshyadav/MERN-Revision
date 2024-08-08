import { useEffect, useState } from "react";

const useRestrauntMenu = (resId) => {
    const [resMenu, setResMenu] = useState([]);

    const fetchMenu = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId);
        const data = await response.json();
        // console.log(data);
        // setResDetails(data.data.cards[2].card.card.info);
        setResMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        // console.log(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    return resMenu;
}

export default useRestrauntMenu;