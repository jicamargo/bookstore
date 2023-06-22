import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="panel-app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
