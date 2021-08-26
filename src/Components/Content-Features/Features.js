import React from 'react'
import "./Features.scss"
const CardArr = [
        { Name: "Web Design", class: "designing" }, 
        { Name: "Development", class: "development" },
        { Name: "Branding", class: "branding"},
        { Name: "Cloud Service", class: "cloud" },
        { Name: "Marketing", class: "marketing" }
    ];

const Card = (props) => {
    const {data} = props;
    return (<div className={`Features-Card  Features-Card-${data.class}`}>
        <img src={`/images/features/${data.class}.jpg`} alt={data.Name} />
        <span>
            {data.Name}
        </span>
    </div>)
}
const Features = (props) => {
    return (
        <div className="Features">
            <div className="Features-container">
                <div className="Features-container-art">
                    <div className="Features-container-art-text">
                        <div>
                            <h3>task.io</h3>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                 nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <Card data={CardArr[0]}/>
                    <Card data={CardArr[1]}/>

                </div>
                <div className="Features-container-art-2">
                <Card data={CardArr[2]}/>
                <Card data={CardArr[3]}/>
                <Card data={CardArr[4]}/>
                </div>
            </div>
        </div>
    )
}


export default Features

