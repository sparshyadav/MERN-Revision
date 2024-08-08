import React from 'react'
import { useParams } from 'react-router-dom';

const MenuItem = (props) => {
    const { resId } = useParams();
    console.log(resId);
    // console.log(props)
    const { name, price, imageId } = props.data;
    let imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,,c_fit/";
    const url = imageUrl + imageId;

    return (
        <div className='menuIndiItem'>
            <img src={url} alt="" />
            <div className="menuIndiDetails">
                <p>{name}</p>
                <p>₹ {price / 100}</p>
            </div>
        </div>
    )
}

export default MenuItem
