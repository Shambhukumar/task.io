import React from 'react'
import "./Worry.scss"

const Worry = () => {
    return (
        <section className="Worry">
            <div className="Worry-container">
            <div className="Worry-container-text">
                <span>No Need To Worry</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img className="Worry-container-art Worry-container-art-1" src="/hello.png" alt=""/>
                <img className="Worry-container-art Worry-container-art-2" src="/freaky.png" alt=""/>
                <img className="Worry-container-art Worry-container-art-3" src="/deadline.png" alt=""/>
                <img className="Worry-container-art Worry-container-art-4" src="/notfound.png" alt=""/>
           
            </div>
        </section>
    )
}
export default Worry;