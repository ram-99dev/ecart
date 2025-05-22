import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/mockData";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddButton = (item) =>{
        dispatch(addItem(item))
    }
    return(
        <div >
            {items.map((item)=>
            <div key={item.card.info.id} className="border-b-2 border-gray-300 shadow-lg flex m-3 p-3">
                <div className="w-9/12 ">
                <span className="font-bold">{item.card.info.name}  - ₹ </span>
                <span className="font-semibold">{item.card.info.price/100 || item.card.info.variantsV2.variantGroups[1].variations[0].price}</span>

                <p className="font-xs">{item.card.info.description}</p>                    
                </div>
                <div className="w-3/12">
                <button className="absolute bg-black text-white p-2 rounded-lg" onClick={()=>handleAddButton(item)}>Add +</button>
                 <img src={CDN_URL + item.card.info.imageId} className="w-full h-36 rounded-lg" />
                </div>


            </div>
            
        
        )}
        </div>
    )
}
export default ItemList;