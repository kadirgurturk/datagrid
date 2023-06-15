import React from 'react'
import logo from "../../asset/header/logo.svg"
import instagram from "../../asset/header/instagram.svg"
import be from "../../asset/header/be.svg"
import youtube from "../../asset/header/youtube.svg"
import linkedin from "../../asset/header/linkedin.svg"

export default function Header() {
  return (
    <nav className='header'>
        <img id="logo" src={logo} alt="logo" />
        <li className='site_links'>
            <ul>
                <a href="">Hakkımızda</a>
                <a href="">Jüri - Yarışma Yazılımı</a>
                <a href="">Word Ninja</a>
                <a href="">Word Pyramids</a>
            </ul>
        </li>
        <li className='social_links'>
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={be} alt="" />
            <img src={linkedin} alt="" />
        </li>

    </nav>
  )
}
