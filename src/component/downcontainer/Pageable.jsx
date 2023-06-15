import React,{useState,useEffect} from 'react'
import arrow from "../../asset/downcontainer/arrow.svg"

let totalpage = 234 / 6;

export default function () {
    const [currpage,setCurrPage] = useState(1);
    
    

    let totalPage = 25;



  return (
    <div className='pagaeble'>
        <img className='left' src={arrow} alt="" />
        <input id='currpage'  type="number" min="1" max={totalPage} />
        <span id='text'>of</span>
        <span id='totalpage'>6</span>
        <img className='right' src={arrow} alt="" />
    </div>
  )
}
