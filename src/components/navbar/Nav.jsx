import React, { useState } from 'react'
import { MdMailOutline } from "react-icons/md"
import { BiPhoneCall } from "react-icons/bi";
import flaguz from "../../assests/flaguz.svg"
import flagru from "../../assests/flaru.png"
import { Link } from 'react-router-dom';
import i18n from '../language/i18next';
import "./Nav.scss";
import { useTranslation } from 'react-i18next';

function Nav() {
  const { t } = useTranslation()
  const [ languageChanger, setChanger ] = useState(flagru)

  function changeLang (selectedLang){
    i18n.changeLanguage(selectedLang)
  }

  return (
    <div className='navbar'>
        <div className="language_select">
           <img src={flaguz} alt="UZ" onClick={() => changeLang('uz')}/>
            <img  src={flagru} alt="RU" onClick={() => changeLang('ru')}/>
        </div>
        <div className="contact">
            <div className="callphone">
                <Link to='tel:+998 91 186 00 85'><BiPhoneCall size={35} className='co call'/> +998 91 186 00 85</Link>
            </div>
            <div className="mailto">
                <Link to='mailto:erkinjon.hodjaev@gmail.com'><MdMailOutline size={35} className='co mail'/>erkinjon.hodjaev@gmail.com</Link>
            </div>
        </div>
    </div>
  )
}

export default Nav