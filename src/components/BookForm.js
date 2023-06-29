import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [book, setBook] = useState({ title: '', author: '' });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Dispatch the 'addBook' action with the book object
    dispatch(addBook({ book }));

    // Clear the form inputs after submission
    setBook({ title: '', author: '' });
  };

  return (
    <div className="add-book-form">
      <form className="bookForm" onSubmit={handleSubmit}>
        <h2 className="form-title">ADD NEW BOOK</h2>
        <div className="bookForm-fields">
          <input
            className="new-book-inputs input-title Text-Style-2"
            type="text"
            placeholder="Title"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
          <input
            className="new-book-inputs input-author Text-Style-2"
            type="text"
            placeholder="Author"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
          <button className="input-btn rectangle-2 Text-Style" type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
