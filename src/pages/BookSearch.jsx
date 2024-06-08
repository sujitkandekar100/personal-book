import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const BookSearch = ({ onAddToBookshelf }) => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
            const bookData = response.data.docs.map(book => ({
                title: book.title,
                edition_count: book.edition_count
            }));
            setBooks(bookData);
            setError(null);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("There was a problem fetching the book data. Please try again.");
        }
    };

    return (
        <div className="book-search-page">
            <Link to="/bookshelf" className="bookshelf-button">My Bookshelf</Link>
            <SearchBar onSearch={handleSearch} />
            {error && <div className="error">{error}</div>}
            <div className="book-list">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <BookCard key={index} book={book} onAdd={onAddToBookshelf} />
                    ))
                ) : (
                    <p>No books found. Try searching for a book.</p>
                )}
            </div>
        </div>
    );
};

export default BookSearch;
