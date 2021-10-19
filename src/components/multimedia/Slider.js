import React from 'react'
import { useEffect, useRef, useState } from "react";
// import './Slider.css'
import Dots from './Dots'

export default function Slider(props) {
  const isScrollRef = useRef()
  const [current, setCurrent] = useState(0)

  const getSwiper =() => document.getElementsByClassName("slider__swiper")[0]
  
  function getDelta() {
    const width = getSwiper().scrollWidth
    return width / props.slides.length
  }

  function scrollToCurrent() {
    getSwiper().scrollTo({
      left: current * getDelta(),
      behavior: "smooth",
    });
  }
  
  function handleScroll(e) {
    clearTimeout(isScrollRef.current);
    isScrollRef.current = setTimeout(function () {
      const currentTouch = e.target.scrollLeft
      const ratio = (currentTouch % getDelta()) / getDelta()
      const temp = Math.round(currentTouch / getDelta())
      if (ratio < 0.5 && ratio > 0.10)
        setCurrent(prev=>((temp >= prev)?(prev + 1):(prev - 1)))
      else if (ratio < 1 && ratio > 0.5) 
        setCurrent(prev=>((temp <= current)?(prev-1):(prev+1)))
      else if (ratio === 0)
        setCurrent(temp)
      else 
        scrollToCurrent();
    }, 66);
  }

  useEffect(() => {
    scrollToCurrent();
  }, [current])

  // useEffect(()=>{
  //   console.log(props.slides)
  // }, [props.slides])

  return (
    <>
      <div className='slider'>
        <div className='slider__swiper' onScroll={handleScroll}>
          {props.slides.map((slide, index) => 
            <img className='slider__carousel-img' 
            // loading='lazy'
            key={index} 
            src={slide} 
            alt="" 
            width={props.width} 
            height={props.height} 
            />
          )}
        </div>
      </div>
      <Dots slides={props.slides} current={current} />
    </>
  );
};