import React from 'react'
import "./footer.scss"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-border"></div>
           <div className="Footer-content">
               <div className="Footer-content-info">
                   <h3>task<span>.</span>io</h3>
                   <p>Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor 
                       incididunt ut labore et dolore magna aliqua. 
                       Ut enim ad minim veniam, quis nostrud exercitation
                       ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. 
                       Excepteur sint occaecat cupidatat non proident,</p>
                </div>
                <div className="Footer-content-moreInfo">
               <div className="Footer-content-company">
                   <h4>Company</h4>
                   <ul>
                       <li>About Us</li>
                       <li>Contact</li>
                       <li>Latest News</li>
                       <li>Help & Facts</li>
                       <li>Privacy Policy</li>
                   </ul>
                </div>
               <div className="Footer-content-links">
               <h4>Links</h4>
                   <ul>
                       <li>Home</li>
                       <li>Product</li>
                       <li>Blog</li>
                       <li>Contacts</li>
                   </ul>
               </div>
               <div className="Footer-content-contact">
               <h4>Contacts</h4>
                   <ul>
                       <li>Phone</li>
                       <li>+11 111 111 1111</li>
                       <li>Email</li>
                       <li>test@mail.com</li>
                   </ul>
               </div>
               </div>
           </div>
        </div>
    )
}
export default  Footer