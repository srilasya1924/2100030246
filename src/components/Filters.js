import React from 'react';

const Filters = ({ filterOptions, applyFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    applyFilters({ ...filterOptions, [name]: value });
  };

  return (
    <div className="filters">
      <label>Category:
        <input type="text" name="category" value={filterOptions.category} onChange={handleChange} />
      </label>
      <label>Company:
        <input type="text" name="company" value={filterOptions.company} onChange={handleChange} />
      </label>
      <label>Min Rating:
        <input type="number" name="minRating" value={filterOptions.minRating} onChange={handleChange} />
      </label>
      <label>Min Price:
        <input type="number" name="minPrice" value={filterOptions.minPrice} onChange={handleChange} />
      </label>
      <label>Max Price:
        <input type="number" name="maxPrice" value={filterOptions.maxPrice} onChange={handleChange} />
      </label>
      <label>Availability:
        <input type="checkbox" name="availability" checked={filterOptions.availability} onChange={handleChange} />
      </label>
      <button onClick={() => applyFilters(filterOptions)}>Apply Filters</button>
    </div>
  );
};

export default Filters;
