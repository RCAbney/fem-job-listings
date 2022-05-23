import React, { useState, useEffect } from "react";
import FilterButton from "../FilterButton/FilterButton";
import styles from "./FilterBar.module.css";

const FilterBar = ({
  activeFilters,
  setActiveFilters,
  handleFilterCloseClick,
}) => {
  const [isBarVisible, setIsBarVisible] = useState(false);

  useEffect(() => {
    if (activeFilters.length > 0) {
      setIsBarVisible(true);
    } else {
      setIsBarVisible(false);
    }
  }, [activeFilters]);

  return (
    <div
      className={`${styles.filterBarWrap} ${isBarVisible && styles.visible}`}
    >
      <div className={styles.filterBar}>
        <div className={styles.filterTagsWrapper}>
          {activeFilters &&
            activeFilters.map((filter, i) => {
              return (
                <FilterButton
                  key={i + filter}
                  filterName={filter}
                  handleFilterCloseClick={handleFilterCloseClick}
                />
              );
            })}
        </div>
        <div>
          <span
            className={styles.filterBarClear}
            onClick={() => setActiveFilters([])}
          >
            Clear
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
