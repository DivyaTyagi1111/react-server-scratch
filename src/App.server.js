import React, { Suspense, lazy } from 'react'
import {fetch} from 'react-fetch'
import Header from './components/header/Header.server'
import Loader from './Loader.server'
import Testing from './Testing.client'
// import WidgetLoader from './WidgetLoader.server'


function App(props) {
    const data = fetch(`http://localhost:4000/api/${props.page}/${props.pageNo}`).json()
    let pagePriceDetails
    if(data['priceData'])
      pagePriceDetails=data["priceData"]
    const slots=data['slots']
    const hasMorePages=data['hasMorePages']
    return(
      <>
        <Header />
        <Testing/>
        {/* <Suspense fallback={
          <div style={{marginTop:'40vh'}}>
            <Loader isBottom={false}/>
          </div>
        }> */}
        {/* <Suspense fallback={<div style={{backgroundColor:'red', height:'100vh', width:'100vw'}}>Hello</div>}>
          <WidgetLoader page={props.page} pagePriceDetails={pagePriceDetails} slots={slots} hasMorePages={hasMorePages}/>
        </Suspense> */}
        {/* <h1>Hello</h1> */}
      </>
    )
}

export default App
