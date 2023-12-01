import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearches({
  searchTerm,
  setSearchTerm,
  setSearched,
}) {
  const searches = [
    "soup",
    "salad",
    "pizza",
    "burger",
    "biriyani",
    "pasta",
    "sandwich",
    "lasagna",
    "smoothie",
    "cake",
  ];

  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
            onClick={() => {
              setSearchTerm(search);
              setSearched(true);
            }}
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Here...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn" onClick={() => setSearched(true)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
