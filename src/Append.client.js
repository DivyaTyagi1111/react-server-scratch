import React, {useEffect} from "react";
import {useLocation} from './LocationContext.client';

export default function Append(props){
    const [, setLocation] = useLocation();
    useEffect(()=>setLocation(loc=>({...loc, slot:[...loc.slot, ...props.slotNew]})), [])
    return(<></>)
}