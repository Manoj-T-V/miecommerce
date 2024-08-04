import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import HotItemCard from "./HotItemCard.js"

const SearchPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { search } = useLocation();
 // const { query } = new URLSearchParams(useLocation().search);

  // Get the search query string from the URL
const queryString = window.location.search;
const queryParams = queryString.substring(1);

// Split the string into an array using '=' as the delimiter
const [paramName, query] = queryParams.split('=');

  useEffect(() =>{
    setSearchTerm(query || '')
    console.log(query);
    if (query) {
      const results = data.hotAccessories.smartDevice.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      // If query is empty or undefined, clear searchResults
      setSearchResults([]);
    }
  },[search]);

  debugger;
  return (
    <div>
    {searchResults.length>0 ? (
      <h2> showing results for {query} </h2>
    ):
    (<h2> No results found for "<b>{query}</b>" </h2>)
}
      <div>
        
        
      </div>
      <div style={{display:'flex'}}>
      {searchResults && searchResults.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                   
            ))}
      </div>
    </div>
  );
};

export default SearchPage;
