import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams();

  useEffect(() =>{
    
  })
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
        {/* Display search results here */}
        {searchResults.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
