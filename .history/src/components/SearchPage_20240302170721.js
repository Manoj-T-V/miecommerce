import React, { useState } from 'react';

const SearchPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
     const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Search Page</h2>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Productesfcdefws"
        />
        <button onClick={handleSearch}>Search</button>
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
