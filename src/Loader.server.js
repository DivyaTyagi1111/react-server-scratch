import React from 'react'
// import './Loader.css'

export default function Loader({isBottom}) {
    var bg=isBottom?'#F0F3F6':'white'
    return (
        <>
        <div className='loader' 
        style={{backgroundColor:bg}}
        >
            {isBottom && <div className='loader-text'><center>Hang on, loading content</center></div>}
            <div className="lds-ring">
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
        </>
    )
}