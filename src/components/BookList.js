import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';

import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();

  // load books from API on component mount
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books);

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
      {books.map((book) => <Book key={book.item_id} book={book} />)}
    </section>
  );
};

export default BookList;
