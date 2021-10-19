import React from "react";
import Components from "./componentIndex.server";
// import Loader from "./shell/Loader";

    
const WidgetLoader = (props) => {
    const pageBreakRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // window.addEventListener('scroll', function() {
    //   var el = document.querySelector('.page-break');

    //   if(el){
    //     var position = el.getBoundingClientRect();
    //     if(position.top >= 0 && position.bottom-50 <= window.innerHeight) {
    //       setIsVisible(true)
    //     }
    //     else
    //       setIsVisible(false)
    //   }
    // })

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
      if(hasMorePages && isVisible){
        setPageNo(p=>p+1)
      }
    }, [hasMorePages, isVisible])

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

  return (
    <>
        {/* {props.slots.map((slot, i) => {
          //   console.log(slot.widget.type);
          let WidgetName = Components[slot.widget.type];
          return (
            <div key={i}>
              {slot.widget.type !== "PRODUCT_PAGE_SUMMARY" &&
                Components.hasOwnProperty(slot.widget.type) && (
                  <WidgetName widgetData={slot} />
                )}
              {slot.widget.type === "PRODUCT_PAGE_SUMMARY" && (
                <WidgetName widgetData={slot} priceDetails={props.pagePriceDetails} />
              )}
            </div>
          );
        })} */}
        {/* <div ref={pageBreakRef} style={{backgroundColor:'rgb(240,243,246)',height:'5px'}} className='page-break'/>
        {isLoading && pageNo>1 && <Loader isBottom={true}/>} */}
    </>
  );
};

export default WidgetLoader;
