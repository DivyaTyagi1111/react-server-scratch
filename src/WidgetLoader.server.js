import React from "react";
import Components from "./componentIndex.server";
import Pagination from './Pagination.client'

    
const WidgetLoader = (props) => {

  return (
    <>
        {props.slots.map((slot, i) => {
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
        })}
        {/* <div style={{backgroundColor:'rgb(240,243,246)',height:'5px'}} className='page-break'/> */}
        {/* {isLoading && pageNo>1 && <Loader isBottom={true}/>} */}
        {/* {props.children} */}
        <Pagination hasMorePages={props.hasMorePages}/>
    </>
  );
};

export default WidgetLoader;
