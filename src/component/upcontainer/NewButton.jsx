import React from 'react'
import plus from "../../asset/upcontainer/plus.svg"


export default function NewButton() {
  return (
    <button className='newButton'>
        <img src={plus}/>
        <span>Yeni Hesap Ekle</span>
    </button>
  )
}
