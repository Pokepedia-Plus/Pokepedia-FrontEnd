import React from "react";
import "./Modal.css";

export default function SearchBar({ searchText, setSearchText, genNum, setGenNum, sortOrder, setSortOrder }) {
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleGenerationNumberChange = (event) => {
    setGenNum(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="search-container">
      <div>
        <label className="search-label" htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          className="search-input"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
      <div>
        <label className="search-label" htmlFor="genNum">Generation:</label>
        <select id="genNum" value={genNum} onChange={handleGenerationNumberChange} className="search-select">
          <option value="1">Generation 1</option>
          <option value="2">Generation 2</option>
          <option value="3">Generation 3</option>
          <option value="4">Generation 4</option>
          <option value="5">Generation 5</option>
          <option value="6">Generation 6</option>
          <option value="7">Generation 7</option>
          <option value="8">Generation 8</option>
          <option value="9">Generation 9</option>
          {/* Add options for other generations as needed */}
        </select>
      </div>
      <div>
        <label className="search-label" htmlFor="sortOrder">Sort by:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange} className="search-select">
          <option value="name">Name</option>
          <option value="id">ID</option>
        </select>
      </div>
    </div>
  );
}
