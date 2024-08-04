import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import HotItemCard from "./HotItemCard.js"

const SearchPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { query } = new URLSearchParams(useLocation().search);

  // Get the search query string from the URL
const queryString = window.location.search;

// Create a new URLSearchParams object from the query string
const params = new URLSearchParams(queryString);

// Get the value of the 'query' parameter
const queryValue = params.get('query');
  useEffect(() =>{
    setSearchTerm(query || '')
    console.log(query);
    if (query) {
      setSearchResults(data.hotAccessories.smartDevice);
    } else {
      // If query is empty or undefined, clear searchResults
      setSearchResults([]);
    }
  },[query]);

  const handleSearch = () => {
     const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2> showing results for </h2>
      <div>
        
        
      </div>
      <div>
      {searchResults && searchResults.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                   
            ))}
      </div>
    </div>
  );
};

export default SearchPage;
