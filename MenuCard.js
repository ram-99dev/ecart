import { MENU_URL } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantCatagory from "./RestaurantCatagory";


const MenuCard = () => {

    const [menuInfo, setMenuInfo] = useState(null);
    const { resId } = useParams();
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json()
        setMenuInfo(json);
    }

    if( menuInfo === null ) return <Shimmer />;

    const itemList = menuInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c?.card?.card?.["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(itemList)
    const {name, areaName, cuisines} = menuInfo?.data.cards[2].card.card.info;

    return (
        <div className="">
            <div className="menu-card-heading mt-2 mx-auto w-6/12 text-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h2>{areaName}</h2>
            <h3>{cuisines.join(", ")}</h3>                
            </div>

            <div className="ItemCards mt-3">
                <h1 className="mb-3 mx-auto w-6/12 text-center font-bold text-2xl">Menu</h1>
                <ul>
                    {/* {itemList.map((res)=><li key={res.card.info.id}>{res.card.info.name}</li>)} */}
                    {itemList.map((r)=> <RestaurantCatagory data={r} key={r.card.card.categoryId} />)}
                </ul>
            </div>

        </div>
    )
}

export default MenuCard;