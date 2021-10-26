import React from "react";
// import './Rate.css'

export default function Rate({data, isReviews, rateStyles}){
    return(
        <div className="rate-ratings" style={{
          margin:`${rateStyles.rateRatingsMargin}`
        }}>
          <div className="rate-ratings__rate" style={{
            padding:`${rateStyles.ratePadding}`
          }}>
            <div className="rate-ratings__rate-value" style={{
              fontSize:`${rateStyles.rateValueFontSize}`,
              padding:`${rateStyles.rateValuePadiing}`
            }}>
              {data.rate} ★</div>
          </div>
          <div className="rate-ratings__ratings" style={{
            padding:`${rateStyles.ratingsPadding}`
          }}>
            <span>{data.ratings} ratings </span> 
            {isReviews && <span>and {data.reviews} reviews</span>}
          </div>
        </div>
        // <h1>Rate</h1>
    )
}