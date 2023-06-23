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
        <div className="categorie Text-Style-11">
          Action
        </div>
        <div className="title Text-Style-5">
          {title}
        </div>
        <div className="author Text-Style-8">
          {author}
        </div>
        <div className="btn-container-book" role="group">
          <button className="btn-book-item" type="button">
            Comment
          </button>
          <button
            className="btn-book-item"
            type="button"
            onClick={() => {
              dispatch(removeBook({ item_id: book.item_id }));
            }}
          >
            Remove
          </button>
          <button className="btn-book-item" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="bookItem-middle">
        {/* <div className="progress-circle" data-percent="15" /> */}
        <div className="progress-circle" data-percent="15" />

        <div className="percent-cnt">
          <div className="percent-number Text-Style-2">
            64%
          </div>
          <div className="percent-completed Text-Style-2">
            Completed
          </div>
        </div>
      </div>
      <div className="bookItem-right">
        <div className="current-chapter Text-Style-2">
          Current Chapter
        </div>
        <div className="chapter Text-Style-1">
          Chapter 17
        </div>
        <button className="btn-update rectangle-1 Text-Style" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </article>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
