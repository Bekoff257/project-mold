import Req from "./components/requirest/Req";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import SearchNav from "./search-nav/SearchNav";
import ScrollTop from "./components/scrolltotop/ScrollTop";
import Cart from "./components/cart/Cart";
import { ToastContainer } from 'react-toastify';
import "./App.scss"
import Routers from "./routes";

function App() {
  return (
    <div className="app">
      <ScrollTop/>
      <Nav />
      <SearchNav />
      <Cart />
      <Routers />
      <Req />
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;