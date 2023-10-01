import { Routes, Route } from 'react-router-dom'
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import ProductView from "./../product-view/ProductView";
import Login from "./../components/login/Login";
import Admin from "./admin/Admin";
import SubCategory from "./../components/subcategory/SubCategory";
import MainCategory from "./main-category/MainCategory"
import Private from './private/Private';
import Orders from "./admin/orders/Orders"
import Create from "./admin/create/Create"
import Manage from "./admin/manage/Manage"
import Chart from "./admin/chart/Chart"



const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/maincategory/:categoryname" element={<MainCategory />}/>
        <Route path="/subcategory/:subcategoryname" element={<SubCategory />}/>
        <Route path="/product-view/:id" element={<ProductView />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/' element={<Private/>}>
          <Route path='/admin' element={<Admin/>}>
            <Route path='/admin/orders/all' element={<Orders />}/>
            <Route path='/admin/manage' element={<Manage />}/>
            <Route path='/admin/create' element={<Create />}/>
            <Route path='/admin/chart' element={<Chart />}/>
          </Route>
        </Route>
    </Routes>
  )
}

export default Routers