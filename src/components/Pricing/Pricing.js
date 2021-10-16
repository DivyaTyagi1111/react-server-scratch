import React from "react";
import PricingCSS from './Pricing.module.css'
const Pricing = (props) => {
    return(
        <div className={PricingCSS['pricing-div']} style={{'justifyContent': `${props.priceStyles.align}`}}>
            <div className={PricingCSS["price"]} style={{'fontSize':`${props.priceStyles.fontSizes.displayPrice}`}}>&#x20B9;{props.priceData.displayPrice}</div>
            <div className={PricingCSS["strike-price"]} style={{'fontSize':`${props.priceStyles.fontSizes.strikeOffPrice}`}}>{props.priceData.strikeOffPrice}</div>
            <div className={PricingCSS["discount"]} style={{'fontSize':`${props.priceStyles.fontSizes.discountPercentage}`}}>{props.priceData.discountPercentage}% off</div>
        </div>
    );
}

export default Pricing;
