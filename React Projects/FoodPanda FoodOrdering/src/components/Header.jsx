import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const toggleBtnName = () => {
        if (btnName == "Login") {
            setBtnName("Logout");
        }
        else {
            setBtnName("Login");
        }
    }

    const status = useOnlineStatus();

    return (
        <div className='header'>
            <div className="logoContainer">
                <Link to={"/"}><img className='logo' src="https://cdn.iconscout.com/icon/free/png-256/free-foodpanda-logo-icon-download-in-svg-png-gif-file-formats--food-delivery-package-pack-logos-icons-1369420.png?f=webp" alt="Logo Not Found" /></Link>
            </div>
            <div className="onlineStatus">
                <div className="status">{status ? "🟢 Online" : "🔴 Offline"}</div>
            </div>
            <div className="navItems">
                <ul>
                    <li className='headerLinks'><Link to={"/"}>Home</Link></li>
                    <li className='headerLinks'><Link to={"/about"}>About Us</Link></li>
                    <li className='headerLinks'><Link to={"/contact"}>Contact Us</Link></li>
                    <li className='headerLinks'><Link to={"/grocery"}>Grocery</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={toggleBtnName}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header
