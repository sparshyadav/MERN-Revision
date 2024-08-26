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
        <div className='flex h-24 justify-between shadow-md mb-12'>
            <div className="ml-10">
                <Link to={"/"}><img className='h-full' src="https://cdn.iconscout.com/icon/free/png-256/free-foodpanda-logo-icon-download-in-svg-png-gif-file-formats--food-delivery-package-pack-logos-icons-1369420.png?f=webp" alt="Logo Not Found" /></Link>
            </div>
            <div className="flex justify-center items-center gap-10">
                <div className="">
                    <div className="status">{status ? "🟢 Online" : "🔴 Offline"}</div>
                </div>
                <div className="">
                    <ul className='flex gap-7 mr-28'>
                        <li className='headerLinks'><Link to={"/"}>Home</Link></li>
                        <li className='headerLinks'><Link to={"/about"}>About Us</Link></li>
                        <li className='headerLinks'><Link to={"/contact"}>Contact Us</Link></li>
                        <li className='headerLinks'><Link to={"/grocery"}>Grocery</Link></li>
                        <li>Cart</li>
                        <button className='login' onClick={toggleBtnName}>{btnName}</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
