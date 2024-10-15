import React from 'react';
import PropTypes from 'prop-types';
import './SortControl.css';

const SortControl = ({ currentSelection, onSelectionChange }) => {
  const handleChange = (event) => {
    onSelectionChange(event.target.value);
  };

  return (
    <div className="sort-control">
      <label htmlFor="sort-select">Sort by</label>
      <select id="sort-select" value={currentSelection} onChange={handleChange}>
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

SortControl.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default SortControl;
