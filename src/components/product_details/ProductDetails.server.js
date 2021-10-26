import React from "react";
import "./ProductDetails.css";
import Title from '../Title/Title.server'

export default function ProductDetails({ widgetData }) {
  const getSpecs = () =>
    widgetData.widget.data.renderableComponent.value.specification;
  const getDetailsTitle = () =>
    widgetData.widget.data.renderableComponent.value.details;

    const data={
      specs: getSpecs(),
      detailsTitle: getDetailsTitle(),
    }

  return (
    // Product Details and All details from json??
    <div className='temp'>
    <div className="common">
      <Title isButton={false} title='Product Details'/>
      <div className="details">
        <div className="details__specs">
          {data.specs.map((d) => (
            <div key={d.name}>
              <div className="details__name">{d.name}</div>
              <div className="details__values">{d.values}</div>
            </div>
          ))}
        </div>
        <div className="details__title">Details</div>
        <div className="details__detail-title">{data.detailsTitle}</div>
      </div>
      <div className="break-div" />
      <div className="all-details">
        <div className="all-details__value">All Details</div>
        <div>
          <a href="/">
            <img
              className="all-details__arrow"
              src="https://rukminim1.flixcart.com/www/40/40/promos/14/06/2019/2b122c28-4cef-490b-a251-41e0176c977a.png?q=90"
              loading="lazy"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    </div>
    // <h1>Product Details page</h1>
  );
}
