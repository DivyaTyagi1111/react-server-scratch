import React from "react";
import RecentProductCSS from "./RecentProduct.module.css"
import {parseImageUrl} from '../../../Utils'
import Pricing from "../../Pricing/Pricing";
const RecentProduct = (props) => {
    // console.log(props.rc);
    if(!props.rc)return(null);
    const titleData = props.rc.action.tracking;
    const priceData = props.rc.value.pricing;

    const priceStyles={
        fontSizes:{
            displayPrice :"14px",
            strikeOffPrice:"12px",
            discountPercentage:"12px"
        },
        align: 'left'
    }

    return(
        <div className={RecentProductCSS['product-wrapper']}>
            <div className={RecentProductCSS['product-div']}>
                <img alt="Recent Product Image" className={RecentProductCSS['product-img']} src={parseImageUrl("1:1",props.rc.value.images[0].imageUrl,80)[0]}></img>
                <div className={RecentProductCSS['product-details-div']}>
                    <div className={RecentProductCSS['product-title']}>{titleData.title_primary}</div>
                    <div className={RecentProductCSS['product-subtitle']}>{titleData.title_secondary}</div>
                    <Pricing priceStyles = {priceStyles} priceData={priceData}/>
                </div>        
            </div>
        </div>
    );
}

export default RecentProduct;