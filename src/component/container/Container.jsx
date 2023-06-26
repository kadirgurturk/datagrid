import React from 'react'
import UpContainer from '../upcontainer/UpContainer'
import DownContainer from '../downcontainer/DownContainer'
import Grid from "./Grid"

export default function Container() {
  return (
    <div className='container'>
        <UpContainer/>
        <Grid/>
        <DownContainer/>
    </div>
  )
}
//Grid yapısnın tüm bileşenlerini daha rahat handle edebilmek için burada birleştirildi.
