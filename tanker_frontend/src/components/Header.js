import React from "react";
import { useSelector } from "react-redux";
import "../style/header.css";

import { FaSearch } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return (
    // <div className="header">
    <div className="container">
      <div className="logo header-component-logo">
        <img src={<FaReact />} alt="not found" />
      </div>

      <div className="components">
        <div className="search">
          <input type="text" class="search__input" placeholder="Search..." />
          <div className="search__icon">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="header-component-info">
        {userInfo ? (
          <div>{userInfo.email}</div>
        ) : (
          <button class="custom-btn updateButton" style={{"marginTop":"10px"}} onClick={() => handlelogin()}>
            <span>Login</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
