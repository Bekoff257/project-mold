import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
// import validateToken from '../../components/helpers/validate_toke';

function Private() {
    const { token } = useSelector(state => state.login)
  return token ? (
    <Outlet />
  ): 
  <Navigate to='/login'/>
}

export default Private