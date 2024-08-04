import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HotItemCard from "./HotItemCard.js"

const SearchPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams();
  console.log(query)
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
