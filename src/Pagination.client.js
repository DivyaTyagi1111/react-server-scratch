import React, {useEffect, useRef, useState, useMemo} from 'react'
import {useLocation} from './LocationContext.client';

export default function Pagination(props){
    const pageBreakRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)
    const [, setLocation] = useLocation();
    // setLocation(loc=>({...loc, slot:[...loc.slot, ...props.slotNew]}))

    const handleIntersect = entries => {
        const[entry] = entries;
        setIsVisible(entry.isIntersecting);
    }
 
    const options = useMemo(()=> {
      return {
        root: null,
        rootMargin: "0px",
        threshold: 0
      }
    },[]);

    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersect, options);
      if(pageBreakRef.current)observer.observe(pageBreakRef.current);
      return() => {
        if(pageBreakRef.current)observer.unobserve(pageBreakRef.current);
      }
        
    },[pageBreakRef.current,options])

    useEffect(()=>{
      if(props.hasMorePages && isVisible){
        setLocation(loc=>({...loc, pageNo:loc.pageNo+1}))
      }
    }, [props.hasMorePages, isVisible])

    // useEffect(()=>
    // {
    //   setIsLoading(true)
    //   fetch(`http://localhost:3000/api/${props.page}/${pageNo}`)
    //   .then(data=>data.json())
    //   .then(data=>{
    //     if(data['priceData'])
    //       setPagePriceDetails(data["priceData"])
    //     setSlots((prev)=>[...prev, ...data['slots']])
    //     setHasMorePages(data['hasMorePages'])
    //     setIsLoading(false)
    //   setIsVisible(false);
    //   })
    // }
    // , [pageNo])

    return(
        <>
        <div ref={pageBreakRef} style={{backgroundColor:'rgb(240,243,246)',height:'5px'}} className='page-break'/>
        </>
    )
}