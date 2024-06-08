import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const Bookshelf = ({ books, onRemoveFromBookshelf }) => {
    return (
        <div className="bookshelf-page">
            <Link to="/booksearch" className="bookshelf-button">Back to Book Search</Link>
            <h2>My Bookshelf</h2>
            <div className="book-list">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} onRemove={onRemoveFromBookshelf} isBookshelf />
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;
