import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from './pages/BookSearch';
import Bookshelf from './pages/Bookshelf';
import './styles.css';  // Assuming styles.css contains your CSS

const App = () => {
    const [bookshelf, setBookshelf] = useState([]);

    const addToBookshelf = (book) => {
        if (!bookshelf.some(b => b.title === book.title)) {
            setBookshelf([...bookshelf, book]);
        }
    };

    const removeFromBookshelf = (book) => {
        setBookshelf(bookshelf.filter(b => b.title !== book.title));
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/booksearch" element={<BookSearch onAddToBookshelf={addToBookshelf} />} />
                    <Route path="/bookshelf" element={<Bookshelf books={bookshelf} onRemoveFromBookshelf={removeFromBookshelf} />} />
                    <Route path="/" element={<BookSearch onAddToBookshelf={addToBookshelf} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
