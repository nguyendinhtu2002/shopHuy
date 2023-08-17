import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarOn } from "../../store/sidebarSlice";
import { getAllCategories } from "../../store/categorySlice";
import { getAllCarts, getCartItemsCount, getCartTotal } from "../../store/cartSlice";
import CartModal from "../CartModal/CartModal";
import { useDebounce } from "./../../hooks/debounce";

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [searchTerm, setSearchTerm] = useState("");
  const [listSearch, setListSearch] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const navigate = useNavigate();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch(`http://localhost:5000/api/v1/product/search?q=${debouncedSearchTerm}`)
        .then((res) => res.json())
        .then((res) => setListSearch(res.products));
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <nav className="navbar">
      <div className="navbar-cnt flex align-center">
        <div className="brand-and-toggler flex align-center">
          <button
            type="button"
            className="sidebar-show-btn text-white"
            onClick={() => dispatch(setSidebarOn())}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/" className="navbar-brand flex align-center">
            <span className="navbar-brand-ico">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className="navbar-brand-txt mx-2">
              <span className="fw-7">HUY</span>SHOP.
            </span>
          </Link>
        </div>

        <div className="navbar-collapse w-[70%] rounded">
          <div className="navbar-search bg-white ">
            <div className="flex align-center ps-relative">
              <input
                type="text"
                className="form-control p-3 fs-14"
                placeholder="Tìm kiếm các mặt hàng ưa thích của bạn ở đây"
                onChange={(e) => handleSearchTerm(e)}
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    navigate(`search/${searchTerm}`);
                  }
                }}
                style={{ height: "30px"}} // Thêm chiều cao và rộng tại đây

              />
              {searchTerm && (
                <div className="search-popover">
                  {listSearch.map((e, i) => {
                    return (
                      <Link key={i} to={`/product/${e._id}`}>
                        <li className="search-popover-item">{e.title}</li>
                      </Link>
                    );
                  })}
                </div>
              )}
              <Link
                to={`search/${searchTerm}`}
                className="text-white search-btn flex align-center justify-center"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
          <div>

          </div>

          {/*<ul className="navbar-nav flex align-center fs-12 fw-4 font-manrope">*/}
          {/*  {categories.slice(0, 12).map((category, idx) => (*/}
          {/*    <li className="nav-item no-wrap" key={idx}>*/}
          {/*      <Link to={`category/${category}`} className="nav-link text-capitalize hover:text-gray-500">*/}
          {/*        {category.replace("-", " ")}*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  ))}*/}
          {/*</ul>*/}
        </div>

        <div className="relative group inline-block ml-[32px]">
          <a href="" className="p-5 rounded-lg transition duration-300 hover:bg-neutral-700/20">Category</a>
          <ul className="hidden absolute rounded-b-lg p-5 z-10 top-[35px] right-0 bg-[#F94E30FF]
          group group-hover:flex group-hover:space-x-5 transition duration-300 ">
            <li className="p-3 rounded-lg hover:bg-neutral-700/20"><a href="" className="whitespace-no-wrap inline-block">Category 1</a></li>
            <li className="p-3 rounded-lg hover:bg-neutral-700/20"><a href="" className="whitespace-no-wrap inline-block">Category 1</a></li>
            <li className="p-3 rounded-lg hover:bg-neutral-700/20"><a href="" className="whitespace-no-wrapinline-block">Category 1</a></li>
            <li className="p-3 rounded-lg hover:bg-neutral-700/20"><a href="" className="whitespace-no-wrapinline-block">Category 1</a></li>
          </ul>
        </div>

        <div className="navbar-cart flex align-center">
          <Link to="/cart" className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-items-value">{itemsCount}</div>
            <CartModal carts={carts} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
