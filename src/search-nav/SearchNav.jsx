import logo from "../../src/assests/search_logo.svg";
import { FiSearch } from "react-icons/fi";
import "./SearchNav.scss";
import { Link } from "react-router-dom"
import Sidebar from '../sidebar/Sidebar';
import { useState, useEffect } from "react"
import { instance } from '../api/axios';
import notfound from "../assests/notfound.png"

function SearchNav() {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    instance(`product/search/${inputSearch}`)
      .then(response => setSearchResult(response.data))
      .catch(err => console.log(err));
    setSearchResult([]);
  }, [inputSearch]);

  const clearSearchResult = () => {
    setSearchResult([]);
  };

  return (
    <>
      <div className="nav_bottom">
        <div className='search_nav'>
          <div className="logo_and_input">
            <div className="logo_right">
              <Link to="/"><img className="logo-img" src={logo} alt='Logo' /></Link>
            </div>
            <form className="search_input">
              <input type="text" placeholder='Қидириш...' value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
              <button type='submit'><FiSearch /></button>
              {searchResult.length > 0 ? <div className="search_results">
                <div className="searched_result">
                  <p>Қидириш натижалари: </p>
                  <span>#{inputSearch}</span>
                </div>
                {
                  searchResult?.map(searchedItem =>
                    <div className="headerof-searched_item" key={searchedItem._id}>
                      <div className="simg_content">
                        <img src={searchedItem?.productImages[0]} alt="" />
                        <Link to={`/product-view/${searchedItem._id}`} onClick={clearSearchResult}>{searchedItem.productName_uz}</Link>
                      </div>
                      <div className="sprice_content">
                        <p>{`${searchedItem?.productSizesAndQuantity[0].price}${searchedItem?.productSizesAndQuantity.length > 1 ? " СУМ" + " - " + searchedItem?.productSizesAndQuantity[searchedItem?.productSizesAndQuantity.length - 1].price : ""} СУМ`}</p>
                      </div>
                    </div>
                  )
                }
                {searchResult.length === 0 && inputSearch.length !== 0 ? <div><img src={notfound} alt="" /></div> : ""}
              </div> : <></>}
            </form>
          </div>
        </div>
        <div className="pages_nav">
          <Sidebar />
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
