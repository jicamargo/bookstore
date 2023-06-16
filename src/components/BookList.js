import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books, onDelete }) => (
  <div>
    <h2>Book List</h2>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title}
          {' '}
          -
          {book.author}
          {' '}
          <button type="button" onClick={() => onDelete(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
