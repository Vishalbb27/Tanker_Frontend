import React from "react";
import "../style/global.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import UpdateForm from "../components/UpdateForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  });

  const redirectToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="global-header">
        <Header />
      </div>
      <div className="global-subcontianer">
        <Navbar />
        {userInfo ? (
          <div className="global-info">
            <UpdateForm />
          </div>
        ) : (
          redirectToLogin()
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
