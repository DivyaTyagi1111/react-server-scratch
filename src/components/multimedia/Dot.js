import React from 'react'
import './Dot.css'

export default function Dot({ active }) {
    // console.log('active : ', active)
    return (
        <span className='dot'
            style={{
                background: `${active ? 'black' : '#C2C2C2'}`
            }}
        />
    )
}