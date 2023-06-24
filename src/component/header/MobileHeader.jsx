import React, { useState } from 'react'
import hamburger from "../../asset/header/hamburger.svg"
import logo from "../../asset/header/logo.svg"
import instagram from "../../asset/header/instagram.svg"
import be from "../../asset/header/be.svg"
import youtube from "../../asset/header/youtube.svg"
import linkedin from "../../asset/header/linkedin.svg"

export default function MobileHeader() {
    const [isOpen,setOpen] = useState(false)

  return (
    <nav className='mobileheader'>
      {
        isOpen ? (
            <nav className='sidebar'>
            <img onClick={()=>{setOpen(false)}} id="hamburgerclose" src={hamburger} alt="hamburger" />
            <li className='site_links'>
              <ul>
                <a href=""><span>Hakkımızda</span></a>
                <a href=""><span>Jüri - Yarışma Yazılımı</span></a>
                <a href=""><span>Word Ninja</span></a>
                <a href=""><span>Word Pyramids</span></a>
              </ul>
            </li>
            <li className='social_links'>
              <img src={youtube} alt="" />
              <img src={instagram} alt="" />
              <img src={be} alt="" />
              <img src={linkedin} alt="" />
            </li>
      </nav>
            
          ) : (
            <div className='mobileheader'>
                <img onClick={()=>{setOpen(true)}} id="hamburger" src={hamburger} alt="hamburger" />
                <img id="logo" src={logo} alt="logo" />
            </div>
            )
      }

    </nav>
  )
}
