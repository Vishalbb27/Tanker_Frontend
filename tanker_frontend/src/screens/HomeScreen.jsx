import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import "../style/home.css";
import Header from "../components/Header";
import { useState } from "react";
import "../style/popup.css";
import TankerInfoCard from "../components/TankerInfoCard";

// import { findUserLocation } from "../utils/location";

const HomeScreen = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "denied") {
        setShowPopup(true);
      } else {
        getUserLocation();
      }
    });
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          // display an error if we cant get the users position
          console.log("Error getting user location:", error);
        }
      );
    } else {
      // display an error if not supported
      console.error("Geolocation is not supported by this browser.");
    }
  };
  console.log(userLocation);
  const handlePermssion = () => {
    setShowPopup(false);
    console.log("here");
    if (showPopup) {
      getUserLocation();
    }
  };

  return (
    <div>
      <div className="home-header">
        <Header />
      </div>
      <div className="home-subcontianer">
        <Navbar />

        <div className="home-info">
          <div>
            <TankerInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
