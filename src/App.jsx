import {Routes, Route} from "react-router-dom";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Req from "./components/requirest/Req";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import SearchNav from "./search-nav/SearchNav";
import ProductView from "./product-view/ProductView";
import ScrollTop from "./components/scrolltotop/ScrollTop";
import MainCategory from "./routes/main-category/MainCategory"
import SubCategory from "./components/subcategory/SubCategory";

function App() {
  return (
    <>
    <ScrollTop/>
      <Nav />
      <SearchNav />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/maincategory/:categoryname" element={<MainCategory />}/>
        <Route path="/subcategory/:subcategoryname" element={<SubCategory />}/>
        <Route path="/product-view/:id" element={<ProductView />}/>
      </Routes>
      <Req />
      <Footer/>
    </>
  );
}

export default App;