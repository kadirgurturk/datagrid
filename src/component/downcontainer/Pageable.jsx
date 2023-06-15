import React,{useState,useEffect} from 'react'
import arrow from "../../asset/downcontainer/arrow.svg"
import { useDispatch,useSelector } from 'react-redux'; 
import { PageChange } from '../../reducers/PageNumberReducer';


export default function () {
  const [inputVal,setInpuVal] = useState("")
  const [currpage, setCurrPage] = useState(inputVal);
  const [rightArrow,setRightArrow] = useState(true);
  const [leftArrow,setLefttArrow] = useState(true);
        
  let row = useSelector(state => state.RowNumber.RowNumber)

  let dispatch = useDispatch();




  const handleCurrPageChange = (event) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
  
    if (parsedValue > totalPage || parsedValue < 1 || isNaN(parsedValue)) {
      alert(`Lütfen 1 ile ${totalPage} arası bir sayı giriniz`);

      return;
    }
    setInpuVal(parsedValue);
    dispatch(PageChange(parsedValue))
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
      dispatch(PageChange(newPage))
    }
  }

  const rightClick = () =>{
    if(currpage < totalPage){
      let newPage = currpage + 1;
      setInpuVal(newPage)
      dispatch(PageChange(newPage))
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
