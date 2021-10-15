import React from 'react'
import {fetch} from 'react-fetch'
import Home from './Home.client'
import Product from './Product.client'

function App(props) {
    const data = fetch(`http://localhost:4000/api/${props.page}/${props.pageNo}`).json()
    switch(props.page){
      case 'home': return (<Home/>)
      case 'product': return (<Product/>)
    }
}

export default App
