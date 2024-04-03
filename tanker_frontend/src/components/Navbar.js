import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { GoHomeFill } from "react-icons/go";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaTruckArrowRight } from "react-icons/fa6";
import { logout } from "../slices/authSlice";
import { IoLogOut } from "react-icons/io5";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


import "../style/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const handleOnclick = () => {
    dispatch(logout());
    toast.success("Logout successful");
    navigate("/login");
  };

  return (
    <div className="content">
      <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="trigger" onClick={handleTrigger}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <div className="sidebar-sub">
          <div>
            <Link to="/">
              <div className="sidebar-position">
                <GoHomeFill size={20} />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/profile">
              <div className="sidebar-position">
                <CgProfile size={20} />
                <span>Profile</span>
              </div>
            </Link>
            <Link to="/">
              <div className="sidebar-position">
                <FaTruckArrowRight size={20} />
                <span>Orders</span>
              </div>
            </Link>
            <Link to="/">
              <div className="sidebar-position">
                <FaHistory size={20} />
                <span>Order History</span>
              </div>
            </Link>
          </div>
          {userInfo && (
            <div>
              {/* <Link to="/"> */}
              <div className="sidebar-position">
                <button
                  className="logout-button"
                  onClick={() => handleOnclick()}
                >
                  <IoLogOut size={30} />
                  <span className="logout">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
