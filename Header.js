import { LOGO_URL } from "../utils/mockData";
import { Link } from "react-router";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus"
import { useSelector } from "react-redux";

const Header = () => {
    const[logbutton, setLogButton] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    const handleLogButton = () => {
        logbutton === "Login" ? setLogButton("Logout") : setLogButton("Login");
    }

     return(
    <div className="header-container flex justify-between bg-slate-300">
        
        <div className="logo-container  text-center">
            <img src={LOGO_URL} className="w-[100] rounded-lg  p-2" />
        </div>

        <div className="nav-bar-container flex justify-center items-center">
            <ul className="flex gap-4 p-2 m-2">
                <li>Online Status : {onlineStatus? "✅" : "🔴"}</li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Contact"}>Contact</Link></li>
                <li><Link to={"/Cart"}>🛒Cart : {cartItems.length}-items</Link></li>
                <button  onClick={handleLogButton}>{logbutton}</button>
            </ul>
        </div>        
        

    </div>
)}

export default Header;