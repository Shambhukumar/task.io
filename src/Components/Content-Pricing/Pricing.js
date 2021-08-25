import React from 'react'
import Card from './Card/Card'
import "./Pricing.scss"

const arr = [0,1,2];
const Pricing = () => {
    return (
        <section className="Pricing">
            {arr.map((e,el)=>{
                return <div className={`Pricing-Card Pricing-Card-${el}`}><Card/></div>
            })}
        </section>
    )
}
export default Pricing