import React, { useState, useEffect } from 'react'
import up from "../../asset/downcontainer/up.svg"
import down from "../../asset/downcontainer/down.svg"
import { useDispatch, useSelector } from 'react-redux';
import { RowChange } from '../../reducers/RowNumberReducer';

const BOTTOM_ROW = 4;
const HIGHER_ROW = 8;

export default function Pagable() {

  const [row, setRow] = useState(6);
  const [upBtn, setUpBtn] = useState(false); //---------> satır saysı limit'e dayandığında, style olarak disabled etmek için
  const [downBtn, setDownBtn] = useState(false); //-----> satır saysı minimum'a indiğinde, style olarak disabled etmek için

  let dispatch = useDispatch();

  

  const upRow = () => {
    if (row < HIGHER_ROW) {
      let newRow = row + 1;
      setRow(newRow)
      dispatch(RowChange(newRow)) //-------> Satır sayısını +1 yükseltiriyoruz ve store'u yeniliyoruz. 
    }
  }

  const downRow = () => {
    if (row > BOTTOM_ROW) {
      let newRow = row - 1;
      setRow(newRow)
      dispatch(RowChange(newRow)) //-------> Satır sayısını -1 azaltıyoruz ve store'u yeniliyoruz. 
    }
  }

  useEffect(() => {

    if (row === HIGHER_ROW) {
      setUpBtn(true)
    } else {
      setUpBtn(false);
    }

    if (row === BOTTOM_ROW) {
      setDownBtn(true)
    } else {
      setDownBtn(false);
    }

  }, [row]); //Satır sayısnın limitler'e varıp varmadığını kontrol edeiyoruz.



  return (
    <div className='rowclass'>
      <span className='text'>Göster:</span>
      <div className="rows">
        <span className='rowinfo'>
          {row} Satır
        </span>
        <span className='row'>
          <img onClick={upRow} className={upBtn ? 'upactive' : 'upBtn'} id='up' src={up} alt="Yukarı" />
          <img onClick={downRow} className={downBtn ? 'downactive' : 'downBtn'} id='down' src={down} alt="Aşağı" />
        </span>
      </div>
    </div>
  )
}

