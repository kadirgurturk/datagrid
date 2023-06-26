import React, { useState,useEffect } from 'react'
import logo from "../../asset/header/logo.svg"
import instagram from "../../asset/header/instagram.svg"
import be from "../../asset/header/be.svg"
import youtube from "../../asset/header/youtube.svg"
import linkedin from "../../asset/header/linkedin.svg"
import MobileHeader from './MobileHeader'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 480);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);


  return (
    <>
      {isMobile ? (
        <MobileHeader />
      ) : (
      <nav className='header'>
            <img id="logo" src={logo} alt="logo" />
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
      )}
    </>
  );
}