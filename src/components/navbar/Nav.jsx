import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { MdMailOutline } from "react-icons/md"
import { BiPhoneCall } from "react-icons/bi";
import flaguz from "../../assests/flaguz.svg"
import flagru from "../../assests/flaru.png"
import { Link, useLocation } from 'react-router-dom';
import i18n from '../language/i18next';
import "./Nav.scss";
import { useTranslation } from 'react-i18next';
const exceptionalRoutes = ["/login", "/admin", "/admin/orders", "/admin/create", "/admin/manage", "/admin/chart", "/admin/orders/all", "/admin/orders/not-contacted", "/admin/orders/contacted"]


function Nav() {
  const navLocation = useLocation()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [ languageState, setLangugageState ] = useState(localStorage.getItem('lang') || 'uz')


  function changeLang (selectedLang){
    i18n.changeLanguage(selectedLang)
    setLangugageState(selectedLang)
    dispatch({language_code: selectedLang, type: 'CHANGE_LANGUAGE'})
  }


  return !exceptionalRoutes.includes(navLocation.pathname) ? (
   <>
     {/* <div className="opennav" onClick={() => setNavbarOpen(true)}>X</div> */}
     <div className='navbar' >
        <div className="language_select">
           <img src={flaguz} alt="UZ" style={ languageState === "uz" ? {borderBottom: '3px solid dodgerblue'} : null }  onClick={() => changeLang('uz')}/>
            <img  src={flagru} alt="RU" style={ languageState === "ru" ? {borderBottom: '3px solid dodgerblue'} : null } onClick={() => changeLang('ru')}/>
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
   </>
  ) : <></>
}

export default Nav