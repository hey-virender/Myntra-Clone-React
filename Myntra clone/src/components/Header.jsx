import React from "react";
import { IoMdPerson } from "react-icons/io";
import { IoHeartCircleSharp } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const bag = useSelector((store) => store.bag);
  console.log("bag contains", bag);
  return (
    <header>
      <div className="logo_container">
        <Link t0="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <FaMagnifyingGlass />
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoMdPerson />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <IoHeartCircleSharp />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <LuShoppingBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
