import React from 'react'

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header
