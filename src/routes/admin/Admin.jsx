import "./Admin.scss"
import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assests/logo.svg"
import { useTranslation } from 'react-i18next';
import i18n from '../../components/language/i18next';
import flaguz from "../../assests/flaguz.svg"
import flagru from "../../assests/flaru.png"
import { Link, NavLink, Outlet } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { FaRegEdit } from "react-icons/fa"
import { PiChartLineUpBold } from "react-icons/pi"

function Admin() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [ languageState, setLangugageState ] = useState(localStorage.getItem('lang') || 'uz')


  function changeLang (selectedLang){
    i18n.changeLanguage(selectedLang)
    setLangugageState(selectedLang)
    dispatch({language_code: selectedLang, type: 'CHANGE_LANGUAGE'})
  }

  return (
   <div className="container">
     <div className='admin'>
      <div className="admin_sidebar">
        <div className="left_sidebar">
          <img className="logo" src={logo} alt="" />
          <div className="language_section">
            <img className="img_la" src={flaguz} alt="uz" style={ languageState === "uz" ? {borderBottom: '3px solid dodgerblue'} : null }  onClick={() => changeLang('uz')}/>
            <img className="img_la" src={flagru} alt="ru" style={ languageState === "ru" ? {borderBottom: '3px solid dodgerblue'} : null } onClick={() => changeLang('ru')}/>
          </div>
          <div className="admin_profile">
          <div className="admin_info">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><g fill-rule="evenodd"><circle cx="17" cy="15.5" r="1.12"></circle><path d="M17 17.5c-.73 0-2.19.36-2.24 1.08.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08z"></path><path d="M18 11.09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55A5.973 5.973 0 0017 23c3.31 0 6-2.69 6-6 0-2.97-2.16-5.43-5-5.91zM11 17c0 .56.08 1.11.23 1.62-.24.11-.48.22-.73.3-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4 5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91zm6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></g></svg>
          </div>
          <div className="id_admin">
              <p>6270F64B</p>
              <h3>Администратор</h3>
            </div>
          </div>
        </div>
        <div className="bottom_sidebar">
          <ul className="links_menu">
            <li className="links_item">
              <NavLink className={({isActive}) => isActive ? 'active' : ''} to={'/admin/orders/all'}>
                <FiShoppingCart />
                <p>Заказы</p>
              </NavLink>
            </li>
            <li className="links_item">
              <NavLink to={'/admin/manage'}>
                <FaRegEdit />
                <p>Управление продуктом</p>
              </NavLink>
            </li>
            <li className="links_item">
              <NavLink to={'/admin/create'}>
                <AiOutlinePlus />
                <p>Создание продукта</p>
              </NavLink >
            </li>
            <li className="links_item">
              <NavLink to={'/admin/chart'}>
                <PiChartLineUpBold />
                <p>Аналитика</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
   </div>
  )
}

export default Admin