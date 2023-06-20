import React from 'react';
import { useSelector } from 'react-redux';

function Categories() {
  const categoriesState = useSelector((state) => state.categories);

  if (categoriesState === 'Under construction') {
    return (
      <div>
        <h1>Categories Page</h1>
        <p>Under construction</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Categories Page</h1>
      <p>New page</p>
    </div>
  );
}

export default Categories;
