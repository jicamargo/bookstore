import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();
  const { title, author } = book;

  return (
    <article className="bookItem">
      <div className="bookItem-left">
        <div className="title">
          {title}
        </div>
        <div className="author">
          {author}
        </div>
        <div>
          <button
            type="button"
            className="removeBtn"
            onClick={() => {
              dispatch(removeBook(book.itemId));
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="bookItem-middle">
        .
      </div>
      <div className="bookItem-right">
        .
      </div>
    </article>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
