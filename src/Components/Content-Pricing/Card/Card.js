import React from 'react'
import "./Card.scss"

const Card = () => {
    return (
        <div className="Card">
            <div className="Card-head">
                <h4>ADVANCED TMJP AGENTS</h4>
                <div className="Card-head-price">
                    <span>$10.50</span>
                      <p>per hour</p>
                </div>
                
            </div>
            <div className="Card-bottom">
                <ul>
                    <li>$76 per day</li>
                    <li>$1520 per month</li>
                    <li>Ideal agents for LEAD GENERATION APPOINTMENT SETTING</li>
                    <li>Excellent Communication Skills</li>
                    <li>2-4 Years of BPO Experience</li>
                    <li>Example live Call: JILL LEAD GENERATION</li>
                </ul>
            </div>
            <span className="Card-button">Get Free Quote</span>
        </div>
    )
}
export default Card