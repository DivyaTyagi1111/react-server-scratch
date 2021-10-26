import React from "react";
// import "./Rating.css";
import Title from "../Title/Title.server";
import Rate from "../Rate/Rate.server";

export default function Rating({ widgetData }) {

  const getBtnValue = () => widgetData.widget.data.reviewButton.value.title;
  const getRate = () => widgetData.widget.data.rating.value.average.toFixed(1);
  const getRatings = () => widgetData.widget.data.rating.value.ratingCount;
  const getReviews = () => widgetData.widget.data.rating.value.reviewCount;

  const data = {
    btnValue: getBtnValue(),
    rate: getRate(),
    ratings: getRatings(),
    reviews: getReviews(),
  }

  let rateStyles = {
    rateRatingsMargin: "0px",
    ratePadding: "8px 5px 5px 5px",
    rateValueFontSize: "20px",
    rateValuePadding: "5px",
    ratingsPadding: "0 10px",
  };

  return (
    <div className="temp">
      <div className="common">
        <Title
          isButton={true}
          title="Ratings and Reviews"
          data={data.btnValue}
        />
        <div className="rating-detail">
          <Rate data={data} isReviews={true} rateStyles={rateStyles} />
        </div>
      </div>
    </div>
    // <h1>Rating</h1>
  );
}
