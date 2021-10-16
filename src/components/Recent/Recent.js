import React from "react";
// import RecentCSS from './Recent.module.css';
// import RecentProduct from "./RecentProduct/RecentProduct";

const Recent = (props) => {
    // console.log(props.widgetData)
    // if(!props.widgetData)return(null);
    // const recentProducts = props.widgetData.widget.data.renderableComponents;
    return(
        // <div className={RecentCSS["recent-div"]}>
        //     <div className={RecentCSS['header-div']}>
        //         <div className={RecentCSS['header-title']}>Recently Viewed</div>
        //         <a href='/product'>
        //         <div className={RecentCSS['header-btn']}>View all</div>
        //         </a>
        //     </div>
        //     <div className={RecentCSS['content-div']}>
        //         <RecentProduct rc={recentProducts[0]}/>
        //         <RecentProduct rc={recentProducts[1]}/>
        //         <RecentProduct rc={recentProducts[2]}/>
        //     </div>
        // </div>
        <h1>Recent</h1>
    );
}

export default Recent;