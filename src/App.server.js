import React, { Suspense } from 'react'
import {fetch} from 'react-fetch'
import Header from './components/header/Header.server'
import Loader from './Loader.server'
import WidgetLoader from './WidgetLoader.server'

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
        <Suspense fallback={
          <div style={{marginTop:'40vh'}}>
            <Loader isBottom={false}/>
          </div>
        }>
          <WidgetLoader page={props.page} pagePriceDetails={pagePriceDetails} slots={slots} hasMorePages={hasMorePages}/>
        </Suspense>
      </>
    )
}

export default App
