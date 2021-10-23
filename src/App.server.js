import React, { Suspense } from 'react'
import {fetch} from 'react-fetch'
import Header from './components/header/Header.server'
import Loader from './Loader.server'
import WidgetLoader from './WidgetLoader.server'
// import Pagination from './Pagination.client'
import Append from './Append.client'

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
        {/* <h1>Testing Append</h1> */}
        <Append slotNew={slots}/>
        <Suspense fallback={
          <div style={{marginTop:'40vh'}}>
            <Loader isBottom={false}/>
          </div>
        }>
          <WidgetLoader page={props.page} pagePriceDetails={pagePriceDetails} slots={slots} hasMorePages={hasMorePages}>
            {/* <Pagination slotNew={slots} hasMorePages={hasMorePages}/> */}
          </WidgetLoader>
        </Suspense>
      </>
    )
}

export default App
