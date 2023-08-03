import React, { useRef, useState } from "react";
import "./searchFilter.css";

// priceList contain the option that we give to user to filter house on based on prices....
const priceList = ["1000-3000", "3000-5000"];
// propertyList contain the option that we give to user to filter house on based on property-type like 'house','Villa', etc ....
const propertyTypeList = ["House", "Villa"];

// LocatioList contain the option that we give to user to filter house on based on location-name(city) like 'CityA','CityB', etc ....
const locationList = ["City A", "City B"];

const SearchFilter = ({ onSearch }) => {
  const calenderRef = useRef();
  let currentDate = new Date();
  currentDate = currentDate.toISOString().split("T")[0];

  const [filterInfo, setFilterInfo] = useState({
    priceRange: priceList[0],
    propertyType: propertyTypeList[0],
    locationName: locationList[0],
    dateField: currentDate,
  });

  const filterInfoHandler = (event) => {
    setFilterInfo((pre) => {
      return { ...pre, [event.target.name]: event.target.value };
    });
  };

  const SearchHandler = () => {
    console.log("hello");
    onSearch(filterInfo);
  };

  return (
    <div className="search-filter-container">
      <div className="search-filter-header">
        <h1 className="search-filter-heading">Search properties to rent</h1>
        <input
          type="text"
          className="search-filter-heading-input"
          placeholder="Search with Searchbar"
        />
      </div>

      <div className="search-filter-inputs-container">
        <div className="search-filter-input-items">
          <div className="search-filter-input-item-container">
            <div className="search-filter-input-item">
              <div className="search-filter-input-item-heading">Location</div>
              <div className="search-filter-input-item-info">
                <p className="search-filter-input-item-info-value">
                  {filterInfo.locationName}
                </p>
                <select
                  id="location-name"
                  className="search-filter-input-drop-down"
                  onChange={filterInfoHandler}
                  name="locationName"
                >
                  {locationList.map((item) => (
                    <option
                      className="search-filter-input-drop-down-option"
                      value={item}
                      key={item.id}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="search-filter-input-item-container">
            <div className="search-filter-input-item">
              <div className="search-filter-input-item-heading">When</div>
              <div className="search-filter-input-item-info">
                <p className="search-filter-input-item-info-value">
                  {filterInfo.dateField}
                </p>
                <input
                  type="date"
                  className="search-filter-input-drop-down"
                  ref={calenderRef}
                  onChange={filterInfoHandler}
                  id="releaseDate"
                  name="dateField"
                />
              </div>
            </div>
          </div>
          <div className="search-filter-input-item-container">
            <div className="search-filter-input-item">
              <div className="search-filter-input-item-heading">Prize</div>
              <div className="search-filter-input-item-info">
                <p className="search-filter-input-item-info-value">
                  ${filterInfo.priceRange}
                </p>
                <select
                  id="price-range"
                  className="search-filter-input-drop-down"
                  onChange={filterInfoHandler}
                  name="priceRange"
                >
                  {priceList.map((item) => (
                    <option
                      className="search-filter-input-drop-down-option"
                      value={item}
                      key={item.id}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="search-filter-input-item-container">
            <div className="search-filter-input-item">
              <div className="search-filter-input-item-heading">
                Property Type
              </div>
              <div className="search-filter-input-item-info">
                <p className="search-filter-input-item-info-value">
                  {filterInfo.propertyType}
                </p>
                <select
                  id="price-range"
                  className="search-filter-input-drop-down"
                  onChange={filterInfoHandler}
                  name="propertyType"
                >
                  {propertyTypeList.map((item) => (
                    <option
                      value={item}
                      className="search-filter-input-drop-down-option"
                      key={item.id}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="search-filter-input-item-container">
            <div
              className="search-filter-input-item-submit"
              onClick={SearchHandler}
            >
              Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
