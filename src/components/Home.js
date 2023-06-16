import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import BookList from './BookList';
import BookForm from './BookForm';

function Home() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [books, setBooks] = useState([
    { id: uuid(), title: 'Book 1', author: 'Author 1' },
    { id: uuid(), title: 'Book 2', author: 'Author 2' },
    { id: uuid(), title: 'Book 3', author: 'Author 3' },
  ]);

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleAddBook = (book) => {
    const newBook = { ...book, id: uuid() };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      {isHomePage && (
        <>
          <BookList books={books} onDelete={handleDeleteBook} />
          <BookForm onAddBook={handleAddBook} />
        </>
      )}
    </div>
  );
}

export default Home;
