import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handlecart = () => {
        dispatch(clearCart())
    }

    return(
        <div >
            <h1 className="text-2xl font-bold text-center m-3 p-3">Cart</h1>
            <div className="text-center">
              <button className="bg-black text-white rounded-lg p-2" onClick={handlecart}>Clear Cart</button>  
            </div>
            {cartItems.length === 0 && <h1 className="font-bold text-center my-3 p-2"> Cart is empty. Add items to your cart!!</h1>}
            <div className="w-6/12 mx-auto">
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}
export default Cart;