import { CDN_URL } from "../utils/mockData";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime ,costForTwo, cloudinaryImageId} = resData?.info;
    return (
        <div className="restaurant-card-container m-3 p-3 w-48 bg-gray-200 hover:bg-slate-300 cursor-pointer">

            <div className="restaurant-card">
                <img src={CDN_URL+cloudinaryImageId} className="rounded-lg w-full h-32" />
                <h3 className="mb-2 font-medium text-lg">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} ⭐</h4>
                <h4>{deliveryTime}Minutes</h4>
                <h4>{costForTwo}</h4>
            </div>

        </div>
    )
}

export const withPromotedLabel= (RestaurantCard) => {
 return (props) => {
       return (
        <div>
            <label className="absolute bg-lime-200 text-black mx-3 rounded-lg p-2">Promoted</label>
            <RestaurantCard {...props} />
        </div>
    )
 }
}
 
export default RestaurantCard;