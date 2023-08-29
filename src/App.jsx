import {Routes, Route} from "react-router-dom";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Req from "./components/requirest/Req";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import SearchNav from "./search-nav/SearchNav";

function App() {
  return (
    <>
      <Nav />
      <SearchNav />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Req />
      <Footer/>
    </>
  );
}

export default App;