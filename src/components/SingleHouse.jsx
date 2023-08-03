import React, { useState } from "react";
import { BiSolidBed, BiSolidBath } from "react-icons/bi";
import { PiSelectionForeground } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./singleHouse.css";

const SingleHouse = ({ house }) => {

  // Use that state to change the favourite functionality of item.
  const [isFav, setIsFav] = useState(false);
  
  return (
    <div className="single-house-item-container">
      <div className="single-house-item">
        <div className="single-house-item-img">
          <img src={house.imageUrl} alt="Something Wrong" />
        </div>
        <div className="single-house-item-info">
          <div className="single-house-item-main-info">
            <div className="single-house-item-main-info-price">
              <span className="single-house-item-main-info-price-span">
                ${house.pricePerMonth}
              </span>
              /month
            </div>
            <div className="single-house-item-main-info-name">{house.name}</div>
            <div className="single-house-item-main-info-location">
              {house.location}
            </div>
            <div
              className="single-house-item-info-add-fav"
              onClick={() => setIsFav(!isFav)}
            >
              {isFav === true ? (
                <AiFillHeart className="single-house-item-info-add-fav-icon" />
              ) : (
                <AiOutlineHeart className="single-house-item-info-add-fav-icon" />
              )}
            </div>
          </div>
          <div className="single-house-item-info-horizontal-line"></div>
          <div className="single-house-item-other-info">
            <div className="single-house-item-other-info-bed">
              <BiSolidBed className="single-house-item-icon" />
              <span>{house.numberOfBeds} beds</span>
            </div>
            <div className="single-house-item-other-info-bathroom">
              <BiSolidBath className="single-house-item-icon" />
              <span>{house.numberOfBathrooms} bathrooms</span>
            </div>
            <div className="single-house-item-other-info-area">
              <PiSelectionForeground className="single-house-item-icon" />
              <span>
                {house.areaInSqft} sqrt <sup>2</sup>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHouse;
