import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HotItemCard from "./HotItemCard.js"

const SearchPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams();

  useEffect(() =>{
    setSearchTerm(query || '')
    console.log(query);
    if(query != null || query != '' || query )
    {
    setSearchResults(data.hotAccessories.smartDevice)
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
