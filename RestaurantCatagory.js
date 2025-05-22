import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCatagory = ({data}) => {
    const [showItems, setShowItems] = useState(false)
    const handleClick = () => {
        setShowItems(!showItems);
    }
    return(
        <div>
            <div className=" w-6/12 mx-auto bg-slate-200 border border-gray-300 border-b-2 shadow-lg m-3 p-3 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                    <span className="font-extrabold ">{data.card.card.title} ({data.card.card.itemCards.length})</span> <span>⬇️</span> 
                </div>

                <div>
                {  showItems && <ItemList items={data.card.card.itemCards} />}
                </div>
            </div>
             

        </div>
    )
}

export default RestaurantCatagory;