import React, { useState } from "react";
import "./rent.css";
import SearchFilter from "../components/SearchFilter";
import SingleHouse from "../components/SingleHouse";
import { rentalProperties } from "../store/dummyData.js";

const Rent = () => {
  const [propertyList, setPropertyList] = useState(rentalProperties);

  const searchHandler = (val) => {
    let requiredDate = new Date(val.dateField);
    let lowPrice = +val.priceRange.split("-")[0];
    let highPrice = +val.priceRange.split("-")[1];
    let requiredHouseType = val.propertyType;
    let requiredCity = val.locationName;

    const arr = rentalProperties.filter((item) => {
      let itemPrice = item.pricePerMonth;
      let itemDate = new Date(item.avialableDate);
      let itemPropertyType = item.propertyType;
      let itemCity = item.location.split(",")[1].trim();

      if (
        itemCity === requiredCity &&
        itemPropertyType === requiredHouseType &&
        requiredDate - itemDate >= 0 &&
        itemPrice >= lowPrice &&
        itemPrice <= highPrice
      )
        return true;

      return false;
    });

    setPropertyList(arr);
  };
  return (
    <div className="rent">
      <SearchFilter onSearch={searchHandler} />
      <div className="rent-items-container">
        <div className="rent-item-list">
          {propertyList.map((item) => {
            return <SingleHouse house={item} key={item.id}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Rent;
