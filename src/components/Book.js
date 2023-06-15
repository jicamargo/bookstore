import React from 'react';

function Book({ title, author, onDelete }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Book;
