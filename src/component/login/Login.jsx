import React, { useState } from 'react'
import close from "../../asset/login/close.svg"
import DataModal from '../../data/DataModal';
import DataList from '../../data/DataList';
import { useDispatch } from 'react-redux'; 
import { LoginOff } from '../../reducers/LoginOffReducer';

export default function Login() {

  const [isSubmit,setSubmit] = useState(false)


  
  let dispatch = useDispatch()

  const closeLogin = () => {

    dispatch(LoginOff());
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    const link = document.getElementById('link').value;
    const socialMedia = document.getElementById('socialMedia').value;
    const description = document.getElementById('description').value;

    let modal = new DataModal(
      link,
      socialMedia,
      description
    )

    
    modal = {
      link: modal.link,
      socialMedia: modal.socialMedia,
      description: modal.description
    };

    const storedData = JSON.parse(localStorage.getItem('dataList'))

    DataList.push(modal);
    storedData.push(modal);  //----> hem data sınıfına hem'de localdeki dataya yeni modal'i ekleriz.

   localStorage.setItem('dataList', JSON.stringify(storedData));

   afterSubmit();

   document.getElementById('link').value = "";
   document.getElementById('socialMedia').value = "";
   document.getElementById('description').value = "";
  };


  const afterSubmit = () =>{
    setSubmit(true)

    setTimeout(()=>{ setSubmit(false)},1500)
  }


  return (
    <div className='login' style={isSubmit ? {outline:"5px solid rgba(0, 245, 75, 0.8)"} : {outline: "none"}}>

        <img onClick={closeLogin} src={close} id='close' alt="close" />

            <form onSubmit={handleSubmit}>
            <label htmlFor="link">Sosyal Medya Linki:</label>
            <input className='form_input' type="text" id="link" name="link" pattern="www\..{3,}" required/>
  
            <label htmlFor="socialMedia">Sosyal Medya:</label>
            <input className='form_input' type="text" id="socialMedia" name="socialMedia" minLength="3" required/>
  
            <label htmlFor="description">Açıklama:</label>
            <input className='form_input' type="text" id="description" name="description" minLength="3" required/>
  
            
            <button className='form_btn' id='reset-btn' type="reset" value="Sıfırla">Sıfırla</button>
            <button  className='form_btn' id='submit-btn' type="submit" value="Gönder">Gönder</button>
            
            </form>
    </div>
  )
}
