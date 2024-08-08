import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem';
import { Link, useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import useRestrauntDetails from '../utils/useRestrauntDetails';

const RestrauntMenu = () => {
    // const [resDetails, setResDetails] = useState([]);
    // const [resMenu, setResMenu] = useState([]);
    const { resId } = useParams();

    const resMenu=useRestrauntMenu(resId);
    const resDetails=useRestrauntDetails(resId);
    console.log("resDetails", resDetails.cuisines);
    // const cuisines = resDetails?.cuisines;
    
    return (
        <div className='menu'>
            <div className="mainMenu">
                <div className="restrauntDetails">
                    <h1>{resDetails.name}</h1>
                    {/* <h2>{cuisines[0]+", "+cuisines[1]}</h2> */}

                </div>
                <div className="restrauntMenu">
                    {
                        resMenu.map((res) => {
                            return <MenuItem key={res.card.info.id} data={res.card.info} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RestrauntMenu
