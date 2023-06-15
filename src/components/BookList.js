import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}{' '}
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
