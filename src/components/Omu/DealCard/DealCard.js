import React from "react";
import DealCardCSS from './DealCard.module.css'
import { parseImageUrl } from "../../../Utils";
import ImageCard from "../../ImageCard/ImageCard";
const DealCard = (props) => {
    // console.log(props.rc);
    if(!props.rc)return(null);
    const dealCardDetails = props.rc.value;
    const imgData = {
        aspectRatio : "1:1",
        imgUrl : props.rc.value.primaryImage.dynamicImageUrl,
        imgWidth : Math.round(screen.width/2),
        imgHeight: "150px",
        padding:"0 0 8px 0"
    }
    return(
        <div className={DealCardCSS['deal-card-div']}>
            {/* <div className={DealCardCSS['img-div']}>
                <img className={DealCardCSS['deal-card-img']} src={parseImageUrl(props.rc.value.aspectRatio,imgData.dynamicImageUrl,imgWidth)[0]}></img>
            </div> */}
            <ImageCard imgData ={imgData} />
            <div className={DealCardCSS['card-name']}>{dealCardDetails.name}</div>
            <div className={DealCardCSS['offer-title']}>{dealCardDetails.offerTitle}</div>
        </div>
    )
}
export default DealCard;