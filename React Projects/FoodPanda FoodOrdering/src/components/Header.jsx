import React, { useState } from 'react'

const Header = () => {
    const [btnName, setBtnName]=useState("Login");

    const toggleBtnName=()=>{
        if(btnName=="Login"){
            setBtnName("Logout");
        }
        else{
            setBtnName("Login");
        }
    }

    return (
        <div className='header'>
            <div className="logoContainer">
                <img className='logo' src="https://cdn.iconscout.com/icon/free/png-256/free-foodpanda-logo-icon-download-in-svg-png-gif-file-formats--food-delivery-package-pack-logos-icons-1369420.png?f=webp" alt="Logo Not Found" />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login' onClick={toggleBtnName}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header
