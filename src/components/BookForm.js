import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Dispatch the 'addBook' action with the book details
    dispatch(addBook({ title, author }));

    // Clear the form inputs after submission
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="bookForm">
      <div className="bookForm-fields">
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
