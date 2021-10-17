import React, { useEffect, useState } from 'react'
// import Slider from './Slider'
// import { parseImageUrl } from '../../Utils'

export default function Multimedia({ widgetData }) {
  const [color, setColor] = useState('red')
  // const [imageData, setImageData] = useState({url:[]})
  // const width = screen.width

  // const getData = () => widgetData.widget.data.multimediaComponents
  // const getAspectRatio = (data) => data.value.aspectRatio
  // const getUrl = (data) => data.value.url

  // useEffect(() => {
  //   if (widgetData) {
  //     getData().map((data, i) => {
  //       const [newUrl, height] = parseImageUrl(getAspectRatio(data), getUrl(data), width)
  //       setImageData(prev => ({ url: i === 0 ? [newUrl] : [newUrl, ...prev.url], height }))
  //     })
  //   }
  // }, [widgetData])

  return (
    // <div className='common'>
    //   <Slider slides={imageData.url} 
    //   height={imageData.height} 
    //   width={width}
    //   />
    // </div>
    <h1>Multimedia</h1>
  )
}