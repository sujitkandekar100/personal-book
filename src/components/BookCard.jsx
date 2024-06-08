import React from 'react';

const BookCard = ({ book, onAdd, onRemove, isBookshelf }) => {
    return (
        <div className="book-card">
            <h3>Book Title: {book.title}</h3>
            <p>Edition Count: {book.edition_count}</p>
            {isBookshelf ? (
                <button onClick={() => onRemove(book)}>Remove from Bookshelf</button>
            ) : (
                <button onClick={() => onAdd(book)}>Add to Bookshelf</button>
            )}
        </div>
    );
};

export default BookCard;
