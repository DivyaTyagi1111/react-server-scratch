import React, { useEffect, useState } from "react";
// import "./ProductPageSummary.css";
// import Pricing from "../Pricing/Pricing";
// import Rate from "../Rate/Rate";

export default function ProductPageSummary({ widgetData, priceDetails }) {
  // const [data, setData] = useState({});
  // const getProductName = () =>
  //   widgetData.widget.data.titleComponent.value.newTitle;
  // const getCompanyName = () =>
  //   widgetData.widget.data.titleComponent.value.superTitle;
  // const getPrice = () =>
  //     priceDetails.pricing.prices.find((item) => item.name === "Selling Price").value;
  // const getMRP = () =>
  //     priceDetails.pricing.prices.find((item) => item.name === "Maximum Retail Price").value;
  // const getDiscount = () => priceDetails.pricing.totalDiscount;
  // const getRate = () =>
  //   widgetData.widget.data.ratingsAndReviews.value.rating.average;
  // const getRatings = () =>
  //   widgetData.widget.data.ratingsAndReviews.value.rating.count;
  // const getFAvailable = () => priceDetails.faAvailable;

  // useEffect(() => {
  //   if (widgetData)
  //     setData({
  //       productName: getProductName(),
  //       companyName: getCompanyName(),
  //       price: getPrice(),
  //       mrp: getMRP(),
  //       discount: getDiscount(),
  //       rate: getRate(),
  //       ratings: getRatings(),
  //       favailable: getFAvailable(),
  //     });
  // }, [widgetData]);

  // let priceStyles = {
  //   fontSizes: {
  //     displayPrice: "22px",
  //     strikeOffPrice: "14px",
  //     discountPercentage: "14px",
  //   },
  //   align: "left",
  // };

  // let priceData = {
  //   displayPrice: data.price,
  //   strikeOffPrice: data.mrp,
  //   discountPercentage: data.discount,
  // };

  // let rateStyles = {
  //   rateRatingsMargin: "10px 0px",
  //   ratePadding: "1px 4px 3px 5px",
  //   rateValueFontSize: "12px",
  //   rateValuePadding: "1px 3px 3px 3px",
  //   ratingsPadding: "0 8px",
  // };

  return (
    // <div className="temp">
    //   <div className="common">
    //     <div className="summary">
    //       <div className="summary__companyName">{data.companyName}</div>
    //       <div className="summary__productName">{data.productName}</div>
    //       <Pricing priceStyles={priceStyles} priceData={priceData} />
    //       <div className="summary__fa">
    //         {data.favailable && (
    //           <img
    //             className="summary__f-assured-img"
    //             src="https://rukminim1.flixcart.com/www/200/50/promos/21/07/2017/e8625e14-3277-4f16-a4d4-df8ed525905b.png?q=90"
    //             loading="lazy"
    //           />
    //         )}
    //       </div>
    //       <Rate data={data} isReviews={false} rateStyles={rateStyles} />
    //     </div>
    //   </div>
    // </div>
    <>
    <h1>Product Page Summary</h1>
    </>
  );
}
