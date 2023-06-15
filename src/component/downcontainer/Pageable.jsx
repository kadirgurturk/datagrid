import React,{useState,useEffect} from 'react'
import arrow from "../../asset/downcontainer/arrow.svg"

let totalpage = 234 / 6;

export default function () {
  const [inputVal,setInpuVal] = useState("")
  const [currpage, setCurrPage] = useState(inputVal);
  const [rightArrow,setRightArrow] = useState(true);
  const [leftArrow,setLefttArrow] = useState(true);
  const totalPage = 6;

  const handleCurrPageChange = (event) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
  
    if (parsedValue > totalPage || parsedValue < 1 || isNaN(parsedValue)) {
      alert(`Lütfen 1 ile ${totalPage} arası bir sayı giriniz`);

      return;
    }
    setInpuVal(parsedValue);
  };

  useEffect(() => {
    setInpuVal(1);
  }, []);

  useEffect(() => {
    setCurrPage(inputVal);
  }, [inputVal]);

  
  const leftClick = () =>{
    if(currpage > 1){
      let newPage = currpage - 1;
      setInpuVal(newPage)
    }
  }

  const rightClick = () =>{
    if(currpage < totalPage){
      let newPage = currpage + 1;
      setInpuVal(newPage)
    }
  }

  useEffect(() => {
    if(inputVal === totalPage){
      setRightArrow(false)
    }else{
      setRightArrow(true)
    }

    if(inputVal === 1){
      setLefttArrow(false)
    }
    else{
      setLefttArrow(true)
    }

}, [currpage,inputVal]);


  return (
    <div className='pagaeble'>
        <img onClick={leftClick} className={leftArrow ? "left" : "disableLeft"} src={arrow} alt="" />
        <input id='currpage'  type="number" value={inputVal}  onChange={handleCurrPageChange} />
        <span id='text'>of</span>
        <span id='totalpage'>6</span>
        <img onClick={rightClick} className={rightArrow ? "right" : "disableRight"} src={arrow} alt="" />
    </div>
  )
}
