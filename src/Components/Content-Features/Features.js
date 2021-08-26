import "./Features.scss"
import  {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const CardArr = [
        { Name: "Web Design", class: "designing", aosClass: "fade-right" }, 
        { Name: "Development", class: "development", aosClass: "fade-up-left" },
        { Name: "Branding", class: "branding", aosClass: "fade-right"},
        { Name: "Cloud Service", class: "cloud", aosClass: "fade-up" },
        { Name: "Marketing", class: "marketing", aosClass: "fade-left" }
    ];

const Card = (props) => {
    useEffect(()=>{
        Aos.init({
          duration: 2000
        })
      },[])
    const {data} = props;
    return (<div data-aos={data.aosClass} className={`Features-Card  Features-Card-${data.class}`}>
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
                    <div data-aos="fade-right" className="Features-container-art-text">
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

