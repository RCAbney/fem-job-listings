import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import JobListings from "./components/JobListings/JobListings";

function App() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [listings, setListings] = useState([]);

  const handleTagClick = (item) => {
    if (activeFilters.includes(item)) return false;
    setActiveFilters([...activeFilters, item]);
  };

  const handleFilterCloseClick = (item) => {
    const newArr = activeFilters.filter(
      (activeFilter) => activeFilter !== item
    );
    setActiveFilters(newArr);
  };

  const filteredListings = listings.filter((listing) => {
    return activeFilters.every((v) => listing.filterValues.includes(v));
  });

  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch("/data/data.json");
      const json = await response.json();
      const addFilterValues = () => {
        for (let i = 0; i < json.length; i++) {
          json[i].filterValues = json[i].languages
            .concat(json[i].tools)
            .concat(json[i].role)
            .concat(json[i].level);
        }
      };
      addFilterValues();
      setListings(json);
    };
    fetchListings();
  }, []);

  return (
    <div className="app">
      <Header />
      <main role="main" className="inner-container">
        <FilterBar
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          handleFilterCloseClick={handleFilterCloseClick}
        />
        {activeFilters.length > 0 ? (
          <JobListings
            listings={filteredListings}
            handleTagClick={handleTagClick}
          />
        ) : (
          <JobListings listings={listings} handleTagClick={handleTagClick} />
        )}
      </main>
    </div>
  );
}

export default App;
