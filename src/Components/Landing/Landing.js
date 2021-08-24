import React from 'react'
import Header from '../Header/Header'
import "./Landing.scss"

const Landing = (props) => {
    return (
        <div className="Landing">
            <span className="Landing-background">

            </span>
            <Header/>
            <div className="Landing-content">
            <div className="Landing-content-right">
                <h1 className="Landing-content-right-hero" >Get it done with task.io</h1>
                <p className="Landing-content-right-peragraph">Task.io gives you the confidence that everything's organized and accounted for, 
                    lets make progress on the things that are important to you.</p>
                <div className="Landing-content-right-buttons">
                    <div className="Landing-content-right-buttons-started">
                        <span>Get Started</span>
                    </div>
                    <div className="Landing-content-right-buttons-video">
                        <span>Watch video</span>
                    </div>
                </div>
            </div>
           <div className="Landing-content-left">
           <div className="Landing-content-left-house"> 
          </div>
           <div className="Landing-content-left-image">
            <span className="Landing-content-left-image-bulb Landing-content-left-image-bulb-1"></span>
            <span className="Landing-content-left-image-bulb Landing-content-left-image-bulb-2"></span>
            <span className="Landing-content-left-image-bulb Landing-content-left-image-bulb-3"></span>
            <span className="Landing-content-left-image-bulb Landing-content-left-image-bulb-4"></span>
            <img className="Landing-content-left-image-mobile-tilt" src="/images/mobile-tilt.png" alt="mobile"/>
            <span className="Landing-content-left-image-mobile-flat"> <img className="Landing-content-left-image-mobile-flat-img" src="/images/mobile-tilt.png" alt="mobile"/></span>
            <div className="Landing-content-left-image-chat">
                <span className="Landing-content-left-image-chat-joined Landing-content-left-image-chat-joined-1"><img src="/images/face-1.jpg" alt="face"/> <span>Kohaku happed into the app</span></span>
                <span className="Landing-content-left-image-chat-joined Landing-content-left-image-chat-joined-2"><img src="/images/face-2.jpg" alt="face"/> <span>Moyo happed into the app</span></span>
            </div>
            
           </div>
           </div>
           </div>
           <img className="Landing-content-left-image-hand" src="/images/hand.png" alt="hand"/>
        </div>
    )
}


export default Landing

