import React from "react";
import "../style/tankerinfocard.css";
import Button from "react-bootstrap/Button";
import TankerPopUp from "./TankerPopUp";
import { useState } from "react";

const TankerInfoCard = () => {
  // const onClickHandler = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  // };
  return (
    <div className="tankerInfoCard">
      <section className="cards scene">
        <article className="card card--1">
          <div className="card__info">
            <span className="card__category">
              {" "}
              <strong>Vishal</strong>
            </span>

            <span className="card__title">
              <strong>Email: </strong> vishal@gmail.com
            </span>

            <span className="card__title">
              <strong>Address:</strong> Bangalore
            </span>

            <span className="card__title">
              <strong>Phone Number:</strong> 1111111111
            </span>

            <span className="card__title">
              <strong>Price:</strong> 2000
            </span>

            <div className="frame">
              <div>
                <button className="custom-btn btn-7" onClick={togglePopup}>
                  Order
                </button>
                {isPopupOpen && <TankerPopUp onClose={togglePopup} />}
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default TankerInfoCard;
