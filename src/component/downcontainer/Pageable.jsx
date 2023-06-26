import React,{useState,useEffect} from 'react'
import arrow from "../../asset/downcontainer/arrow.svg"
import { useDispatch,useSelector } from 'react-redux'; 
import { PageChange } from '../../reducers/PageNumberReducer';

export default function () {

  const storedData = JSON.parse(localStorage.getItem('dataList'))


  const [inputVal,setInpuVal] = useState("")          //--------> input'a girilen sayfa sayısını alabilmek için açılan state
  const [currpage, setCurrPage] = useState(inputVal); //--------> 2 farklı sayfa belirleme yolu olduğu için iki yol için girilen asıl state.
  const [rightArrow,setRightArrow] = useState(true);  //--------> sayfa saysı limit'e dayandığında, style olarak disabled etmek için
  const [leftArrow,setLefttArrow] = useState(true);   //--------> sayfa saysı minimum'a indiğinde, style olarak disabled etmek için
  const [totalPage, setTotalPage] = useState(8);
  
  let row = useSelector(state => state.RowNumber.RowNumber) //----> toplam sayfa sayısı formülü için data sayısı ve satır sayısına ihtiyacım var, bu sebeple satır sayısnı store'dan alrız.


  let dispatch = useDispatch();

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
  


  const handleCurrPageChange = (event) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10); //-----> inputa girilen string'i number'a dönüştürüz.
  
    if (parsedValue > totalPage || parsedValue < 1 || isNaN(parsedValue)) {  //-------> Sayfayı belirleyen input'a geçersiz bir değer girilmesi durumunda durumu handle edilmesi için.
      alert(`Lütfen 1 ile ${totalPage} arası bir sayı giriniz`);

      return;
    }
    setInpuVal(parsedValue);
    dispatch(PageChange(parsedValue))
  };

  useEffect(() =>{
    let info = (storedData.length % row === 0);
    
    let newTotalPage = 0;
    if(info){
      newTotalPage = Math.floor(storedData.length / row)
    }else{
      newTotalPage = Math.floor(storedData.length / row) + 1;
    }
    
    setTotalPage(newTotalPage)
  },[row,storedData])  //-----> toplam sayfa sayısını hesaplıyoruz, bağlı değişkenler değiştirdiğimiz zaman

  useEffect(() => {
    setInpuVal(1);
  }, []);

  useEffect(() => {
    setCurrPage(inputVal);
  }, [inputVal]);

  


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

}, [currpage,inputVal]); //------> sağ ve sol oklar için disable durumlarını kpntrol ederiz.


  return (
    <div className='pagaeble'>
        <img onClick={leftClick} className={leftArrow ? "left" : "disableLeft"} src={arrow} alt="" />
        <input id='currpage'  type="number" value={inputVal}  onChange={handleCurrPageChange} />
        <span id='text'>of</span>
        <span id='totalpage'>{totalPage}</span>
        <img onClick={rightClick} className={rightArrow ? "right" : "disableRight"} src={arrow} alt="" />
    </div>
  )
}
