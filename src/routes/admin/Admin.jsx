import { Outlet } from "react-router-dom"
import "./Admin.scss"
import AdminSidebar from "./admin-sidebar/AdminSidebar"

function Admin() {
  

  return (
   <div className="container">
     <div className='admin'>
      <AdminSidebar />
      <Outlet />
    </div>
   </div>
  )
}

export default Admin