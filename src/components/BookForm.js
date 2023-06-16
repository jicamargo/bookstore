import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      onAddBook({ title, author });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

// add props validation
BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
