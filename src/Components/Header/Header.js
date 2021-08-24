import React from 'react'
import "./header.scss"

const Header = () => {
    return (
        <div className="Container">
            <div className="Container-header">
                <ul className="Container-header-list">
                    <li className="Container-header-list-logo">task<span className="Container-header-list-logo-dot">.</span>io</li>
                    <li>Discover</li>
                    <li>Features</li>
                    <li>Pricing</li>
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