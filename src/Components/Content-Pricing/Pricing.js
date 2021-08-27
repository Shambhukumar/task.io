import React from 'react'
import Card from './Card/Card'
import "./Pricing.scss"
import  {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const arr = [{card:1,aosClass: "fade-right"},{card:2,aosClass: "fade-up"},{card:2,aosClass: "fade-left"}];
const Pricing = () => {
    useEffect(()=>{
        Aos.init({
          duration: 1500
        })
      },[])
    return (
        <section className="Pricing" id="pricing">
            {arr.map((e,el)=>{
                return <div data-aos={e.aosClass} className={`Pricing-Card Pricing-Card-${el}`}><Card/></div>
            })}
        </section>
    )
}
export default Pricing