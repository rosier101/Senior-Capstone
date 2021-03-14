import React from 'react';
import { Button, Row } from 'react-bootstrap';
import '../styles/sort-by.css';
import '../styles/searchbox.css';

const SearchBox = (props) => {
  return (
    // SearchBox above the Filter By
    <div className='search-box'>
      <div id='search-div'>
        <p style={{ marginBottom: '5px' }} id='small-search-text'>
          Search {props.pageName}:
        </p>
        <input
          id='small-search-field'
          type='text'
          placeholder='ENTER CELEBTIRTY NAME'
        ></input>
        <i id='searchsubmit' className='fa fa-search'></i>
      </div>
      <div>
        {/*<Button className='save-search-btn' variant=''>
          <i class='fas fa-plus'></i>
          <span className='save-search'>
            Search{props.searchInput}
          </span>
  </Button>*/}
      </div>
    </div>
  );
};

export default SearchBox;
