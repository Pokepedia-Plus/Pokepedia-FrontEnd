import React from "react";
import "./Modal.css";

export default function SearchBar({ searchText, setSearchText, sortOrder, setSortOrder }) {
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
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
      <label className="search-label" htmlFor="sortOrder">Sort by:</label>
      <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange} className="search-select">
        <option value="name">Name</option>
        <option value="id">ID</option>
      </select>
    </div>
    </div>
  );
}
