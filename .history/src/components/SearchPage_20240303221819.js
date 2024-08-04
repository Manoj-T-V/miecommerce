import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import HotItemCard from "./HotItemCard.js"

const SearchPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 // const { query } = new URLSearchParams(useLocation().search);

  // Get the search query string from the URL
const queryString = window.location.search;
const queryParams = queryString.substring(1);

// Split the string into an array using '=' as the delimiter
const [paramName, query] = queryParams.split('=');

function searchAndFilter(data, query) {
  const filteredData = {};
  
  // Iterate over each category in the data
  Object.keys(data).forEach(category => {
    // Filter items in the category based on the query
    const filteredItems = data[category].filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    
    // If there are filtered items, add them to the filteredData
    if (filteredItems.length > 0) {
      filteredData[category] = filteredItems;
    }
  });

  return filteredData;
}





  useEffect(() =>{
    setSearchTerm(query || '')
    console.log(query);
    if (query) {
      const filteredResults1 = searchAndFilter(data, query);
      // const filteredResults = Object.keys(data).reduce((acc, category) => {
      //   // const categoryResults = data[category].filter(item =>
      //   //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
      //   // );
      //   return [...acc, ...categoryResults];
      // }, []);
      setSearchResults(data.hotAccessories.smartDevice);
    } else {
      // If query is empty or undefined, clear searchResults
      setSearchResults([]);
    }
  },[query]);

  const handleSearch = () => {
    debugger;
     const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2> showing results for {query} </h2>
      <div>
        
        
      </div>
      <div style={{display:'flex'}}>
      {searchResults && searchResults.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                   
            ))}
      </div>
    </div>
  );
};

export default SearchPage;
