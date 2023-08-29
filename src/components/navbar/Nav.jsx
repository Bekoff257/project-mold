import React, { useState } from 'react'
import { MdMailOutline } from "react-icons/md"
import { BiPhoneCall } from "react-icons/bi";
import flaguz from "../../assests/flaguz.svg"
import flagru from "../../assests/flaru.png"
import { Link } from 'react-router-dom';
import "./Nav.scss";

function Nav() {
  const [ languageChanger, setChanger ] = useState(flagru)


  return (
    <div className='navbar'>
        <div className="language_select">
           <img src={flaguz} alt="UZ" className={languageChanger === flaguz ? 'active' : ""}/>
          <img  src={languageChanger} alt="RU" className={languageChanger === flagru ? 'active' : ""}/>
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