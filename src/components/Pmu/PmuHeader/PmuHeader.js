import React from "react";
import PmuHeaderCSS from './PmuHeader.module.css'
import { parseImageUrl } from "../../../Utils";

const PmuHeader = (props) => {
    // console.log(props.headerData);
    if(!props.headerData)return(null);
    return(
        <div className={PmuHeaderCSS['header-div']}>
                <div className={PmuHeaderCSS['header-content']}>
                    <div className={PmuHeaderCSS['header-image-div']}>
                        <img alt="Header Image" src={parseImageUrl("7:8",props.headerData.referenceImageValue.dynamicImageUrl,56)[0]}></img>
                    </div>
                    <div className={PmuHeaderCSS['header-text-div']}>
                        <div className={PmuHeaderCSS['title-text']}>{props.headerData.titleValue.text}</div>
                        <div className={PmuHeaderCSS['subtitle-text']}>{props.headerData.subTitleValue.text}</div>
                    </div>
                </div>
                <div>
                    <a href = '/product'>
                        <div className={PmuHeaderCSS['button-div']} >
                            <div className={PmuHeaderCSS['button-text']}>View All</div>
                            <img src="https://rukminim1.flixcart.com/www/30/30/promos/26/05/2021/bd064927-22ee-4b7b-82db-3bf4c6270184.png?q=90" className={PmuHeaderCSS['arrow-img']}></img>
                        </div>
                    </a>
                </div>
        </div>
    );
}

export default PmuHeader;