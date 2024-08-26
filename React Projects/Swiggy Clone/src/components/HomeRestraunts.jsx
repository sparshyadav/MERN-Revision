import React, {useState} from 'react'
import {useHomeRestraunts} from "../utils/useHomeRestraunts";

const HomeRestraunts = () => {
    const [RestrauntData, setRestrauntData] = useState([]);
    setRestrauntData(useHomeRestraunts());
    console.log(RestrauntData);

    return (
        <div>

        </div>
    )
}

export default HomeRestraunts
