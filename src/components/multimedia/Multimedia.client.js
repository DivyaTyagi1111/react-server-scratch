import React from 'react'
// import { linkCss } from '../../Utils'
import Slider from './Slider'
import { parseImageUrl } from '../../Utils'

export default function Multimedia({ widgetData }) {
  
  const width = screen.width
  let url = []
  let height = 0

  const getData = () => widgetData.widget.data.multimediaComponents
  const getAspectRatio = (data) => data.value.aspectRatio
  const getUrl = (data) => data.value.url
  
  getData().map(data => {
    const [newUrl, h] = parseImageUrl(getAspectRatio(data), getUrl(data), width)
    url.push(newUrl)
    height = h
  })

  return (
    <div className='common'>
      <Slider slides={url} 
      height={height} 
      width={width}
      />
    </div>
    // <h1>Multimedia</h1>
  )
}