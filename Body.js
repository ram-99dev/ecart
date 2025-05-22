import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {

    const[TopRatedRestaurants, setTopRatedRestaurants] = useState([]);
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);
    const[searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
  

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setTopRatedRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
  
    const handleTopRatedRestaurants = () => {
        const filterdTopRatedRestaurants = TopRatedRestaurants.filter((restaurant)=> restaurant.info.avgRating > 4.3);
        setFilteredRestaurants(filterdTopRatedRestaurants);
       
    }

    const handleSearchButton = () => {
        const filtered = TopRatedRestaurants.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filtered);
    }
    
   
     return TopRatedRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body-container">

          <div className="body-header flex justify-between m-3 p-3">
            <div className="search-bar-container">
                <input type="text" placeholder="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="border border-black p-1"  />
                <button className="ml-3 bg-black text-white  p-1 rounded-lg" onClick={handleSearchButton}>Search</button>
            </div>

            <div className="top-rated-restaurant-container">
                <button className="bg-black text-white p-1 rounded-lg" onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
         </div> 

         <div className="restaurant-cards flex flex-wrap">
            {filteredRestaurants.map((cardInfo)=> <Link to={"restaurants/"+cardInfo.info.id} key={cardInfo.info.id}>
            {cardInfo.info.avgRating > 4.4 ? <RestaurantCardPromoted resData={cardInfo}/> : <RestaurantCard  resData={cardInfo} /> }
            </Link> )}
         </div>

        </div>
    )
}

export default Body;