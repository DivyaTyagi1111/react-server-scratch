import React, {useRef} from 'react'

export default function Pagination(){
    let el = document.querySelector('.page-break')
    if(el) console.log(el)
    console.log(el)
    const pageBreakRef = useRef(null)
    if(pageBreakRef.current) console.log(pageBreakRef.current)
    console.log(pageBreakRef.current)
    return(
        <>
        <div ref={pageBreakRef} style={{backgroundColor:'rgb(240,243,246)',height:'5px'}} className='page-break'/>
        </>
    )
}