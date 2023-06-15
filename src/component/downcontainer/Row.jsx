import React,{useState,useEffect} from 'react'
import up from "../../asset/downcontainer/up.svg"
import down from "../../asset/downcontainer/down.svg"
 
const BOTTOM_ROW = 4;
const HIGHER_ROW = 8;

export default function Pagable() {

    const [row,setRow] = useState(8);
    const [upBtn, setUpBtn] = useState(false);
    const [downBtn, setDownBtn] = useState(false);
  
    const upRow = () =>{
      if(row < HIGHER_ROW){
        let newRow = row + 1;
        setRow(newRow)
      }
    }
  
    const downRow = () =>{
      if(row > BOTTOM_ROW){
      let newRow = row - 1;
      setRow(newRow)
      }
    }
  
    useEffect(() => {
      
      if(row == HIGHER_ROW){
        setUpBtn(true)
      }else{
        setUpBtn(false);
      }
      
  
      if(row == BOTTOM_ROW){
        setDownBtn(true)
      }else{
        setDownBtn(false);
      }
        
    },[row]);



  return (
    <div className='rowclass'>
        <span className='text'>Show:</span>
        <div className="rows">
            <span className='rowinfo'>
                {row} Row
            </span>
            <span className='row'>
                <img onClick={upRow} className={upBtn ? 'upactive' : 'upBtn'} id='up' src={up} alt="up" />
                <img onClick={downRow} className={downBtn ? 'downactive' : 'downBtn'} id='down' src={down} alt="down" />
            </span>
        </div>
    </div>
  )
}