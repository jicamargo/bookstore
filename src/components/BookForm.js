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
    <div className="bookForm">
      <div className="bookForm-fields">
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
