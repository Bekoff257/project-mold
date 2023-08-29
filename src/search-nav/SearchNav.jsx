import React from 'react';
import logo from "../../src/assests/search_logo.svg";
import { FiSearch } from "react-icons/fi";
import "./SearchNav.scss";
import { Link } from "react-router-dom"

function SearchNav() {
  return (
    <>
        <div className="nav_bottom">
        <div className='search_nav'>
        <div className="logo_right">
            <Link to="/"><img src={logo} alt='Logo' /></Link>
        </div>
            <form className="search_input">
                <input type="text" placeholder='Қидириш...'/>
                <button type='submit'><FiSearch /></button>
            </form>
        </div>
        <div className="pages_nav">
            <div className="links">
                <ul className='link_main'>
                    <li>
                        <Link to="/">Бош сахифа</Link>
                    </li>
                    <li>
                        <Link to="/partners">Ҳамкорлар</Link>
                    </li>
                    <li>
                        <Link to="/about">Биз ҳақимизда</Link>
                    </li>
                    <li>
                        <Link to="/contact">Алоқа</Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default SearchNav