import React from 'react'
import "./Orders.scss"
import { NavLink, Outlet } from 'react-router-dom'

function Orders() {



  return (
    <div className='order'>
      <div className="page_title">
        <h1>Заказы</h1>
      </div>
      <nav className='nav'>
        <ul>
          <li><NavLink className={({isActive}) => isActive ? 'activeOrder' : ''} to={'/admin/orders/all'}>Все заказы</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'activeOrder' : ''} to={'/admin/orders/all'} to={'/admin/orders/not-contacted'}>Не связанные заказы</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'activeOrder' : ''} to={'/admin/orders/all'} to={'/admin/orders/contacted'}>Связанные заказы</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Orders