import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { v4 as uuid } from 'uuid';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  // const dispatch = useDispatch();

  if (books.length === 0) {
    return (
      <section className="bookList">
        <header>
          <h2>Book List</h2>
          <p>No books to read</p>
        </header>
      </section>
    );
  }

  return (
    <section className="bookList">
      <header>
        <h2>Book List</h2>
      </header>
      <div>
        {books.map((book) => <Book key={book.itemId} book={book} />)}
      </div>
    </section>
  );
};

export default BookList;
