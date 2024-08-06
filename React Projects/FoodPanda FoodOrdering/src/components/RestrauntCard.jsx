import React from 'react'

const RestrauntCard = (props) => {
    // console.log(props);
    const { name, cuisines, avgRating } = props.resData.info;
    const imageURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resData.info.cloudinaryImageId;
    return (
        <div className='resCard'>
            <img className='resImage' src={imageURL} alt="No  Image Found" />
            <div className="resDetails">
                <h3 className='resName'>{name}</h3>
                <h4 className='resCuisine'>{cuisines.join(", ")}</h4>
                <h4 className='resRating'>{avgRating}</h4>
            </div>
        </div>
    )
}

export default RestrauntCard
