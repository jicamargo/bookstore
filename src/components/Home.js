import React from 'react';
import { useLocation } from 'react-router-dom';
import BookList from './BookList';
import BookForm from './BookForm';

function Home() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {isHomePage && (
        <>
          <BookList />
          <BookForm />
        </>
      )}
    </div>
  );
}

export default Home;
