import React from 'react';
import { Shimmer } from 'react-shimmer'

const RestrauntCard = (props) => {
    // console.log("This is Props");
    // console.log(props);
    const { name, cuisines, avgRating } = props.resData.info;
    const imageURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resData.info.cloudinaryImageId;
    const displayedCuisines = cuisines.slice(0, 3).join(", ");
    return (
        <div className='resCard'>
            <img className='resImage' src={imageURL} alt="No  Image Found" fallback={<Shimmer width={800} height={600} />} />
            <div className="resDetails" fallback={<Shimmer width={800} height={600} />}>
                <h3 className='resName' fallback={<Shimmer width={800} height={600} />}>{name}</h3>
                <h4 className='resCuisine' fallback={<Shimmer width={800} height={600} />}>{displayedCuisines}</h4>
                <h4 className='resRating' fallback={<Shimmer width={800} height={600} />}>{avgRating}</h4>
            </div>
        </div >
    )
}

export default RestrauntCard
