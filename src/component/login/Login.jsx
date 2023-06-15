import React from 'react'
import close from "../../asset/login/close.svg"
import DataModal from '../data/DataModal';
import DataList from '../data/DataList';
import { useDispatch } from 'react-redux'; 
import { LoginOff } from '../../reducers/LoginOffReducer';

export default function Login() {

  
  const dispatch = useDispatch()

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

    DataList.push(modal);

    console.log(DataList);

    
  };


  return (
    <div className='login'>

        <img onClick={closeLogin} src={close} id='close' alt="close" />

            <form onSubmit={handleSubmit}>
            <label for="link">Sosyal Medya Linki:</label>
            <input className='form_input' type="text" id="link" name="link" pattern="www\..{3,}" required/>
  
            <label for="socialMedia">Sosyal Medya:</label>
            <input className='form_input' type="text" id="socialMedia" name="socialMedia" minlength="3" required/>
  
            <label for="description">Açıklama:</label>
            <input className='form_input' type="text" id="description" name="description" minlength="3" required/>
  
            
            <button className='form_btn' id='reset-btn' type="reset" value="Sıfırla">Sıfırla</button>
            <button className='form_btn' id='submit-btn' type="submit" value="Gönder">Gönder</button>
            
            </form>
    </div>
  )
}
