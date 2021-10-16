import React from "react";
import { parseImageUrl } from "../../../Utils";
import SuggestionCSS from './Suggestion.module.css';
import Pricing from '../../Pricing/Pricing';
import ImageCard from "../../ImageCard/ImageCard";
const Suggestion = (props) => {
    // console.log(props.rc);
    if(!props.rc)return(null);
    let priceData = props.rc.value.pricing;
    const priceStyles={
        fontSizes:{
            displayPrice :"12px",
            strikeOffPrice:"12px",
            discountPercentage:"12px"
        },
        align: 'center'
    }
    const imgData = {
        aspectRatio : "1:1",
        imgUrl : props.rc.value.images[0].imageUrl,
        imgWidth : props.width,
        imgHeight: "auto",
        padding:"0 0 8px 0"
    }
    return(
        <div className={SuggestionCSS['suggestion-div']}>
            <ImageCard imgData={imgData}/>
            {/* <img className={SuggestionCSS['suggestion-img']} src={parseImageUrl("1:1",props.rc.value.images[0].imageUrl,props.width)[0]}></img> */}
            <div className = {SuggestionCSS['details-div']}>
            <div className={SuggestionCSS['title-div']}>{props.rc.value.titles.title}</div>
            <Pricing priceStyles = {priceStyles} priceData = {priceData} />
            </div>
        </div>
    );
}
export default Suggestion;
