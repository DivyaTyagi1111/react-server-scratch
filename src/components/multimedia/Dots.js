import React from 'react'
import Dot from './Dot'
// import './Dots.css'

export default function Dots({ slides, current }) {
    return (
        <div className='dots'>
            {slides.map((slide, i) => (
                <Dot key={i} active={current === i} />
            ))}
        </div>
    )
}