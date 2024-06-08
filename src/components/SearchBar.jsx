import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-bar" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Search by book name"
                value={query}
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
