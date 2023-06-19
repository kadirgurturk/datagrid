import React from 'react'
import plus from "../../asset/upcontainer/plus.svg"
import LoginPopup from '../popup/LoginPopup';
import { useDispatch,useSelector } from 'react-redux'; 
import { LoginOff } from '../../reducers/LoginOffReducer';

export default function NewButton() {
  const loginOff = useSelector(state => state.loginOff.loginOff)

  let dispatch = useDispatch()

  const openLogin = () => {

    dispatch(LoginOff());
  }

  console.log(loginOff);

  return (
    <>
      <button onClick={openLogin} className='newButton'>
        <img src={plus}/>
        <span>Yeni Hesap Ekle</span>
      </button>
      {loginOff && <LoginPopup/> }
    </>
  )
}
