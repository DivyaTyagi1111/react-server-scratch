import React from "react";
// import './Title.css'

export default function Title({ isButton, title, data }) {
  return (
    <div className="title">
      <div className="title__value">
        <div>{title}</div>
      </div>
      {isButton && <div className="title__btn">
        <div className="title__btn-text">{data}</div>
      </div>}
    </div>
  );
}
