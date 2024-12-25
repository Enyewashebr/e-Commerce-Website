import {useContext, useEffect, useState} from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
const [visible, setVisible] = useState(false);
const location =useLocation();

useEffect(()=>{
    if (location.pathname.includes("collection") && showSearch) {
        setVisible(true);
    }
    else{
        setVisible(false);
    }
}, [location])

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-[#15a3a8] px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-inherit text-sm  outline-none p-2 w-full text-[#15a3a8]"
          type="text"
          placeholder="Search..."
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        src={assets.cross_icon}
        className=" inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
        alt=""
      />
    </div>
  ) : null
}

export default SearchBar
