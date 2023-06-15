import React from 'react'
import close from "../../asset/login/close.svg"

export default function Login() {
  return (
    <div className='login'>

        <img src={close} id='close' alt="close" />

            <form action="">
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
