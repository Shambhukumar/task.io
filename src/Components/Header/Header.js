import React from 'react'
import "./header.scss"

const Header = () => {
    return (
        <div className="Container">
            <div className="Container-header">
                <ul className="Container-header-list">
                    <li className="Container-header-list-logo">task<span className="Container-header-list-logo-dot">.</span>io</li>
                    <li><a href="#worry">Discover</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
                <div className="Container-header-button">
                    <span  className="Container-header-button-text">
                        Get started
                    </span>
                </div>
            </div>
            
        </div>
    )
}
export default Header;