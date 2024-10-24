import './css/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MultiButtons from './MultiButtons';
import Address from './api/Address';
import BookSearch from './api/BookSearch';
import NewsSearch from './api/NewsSearch';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultiButtons />} />
          <Route path="/address" element={<Address />} />
          <Route path="/search" element={<BookSearch />} />
          <Route path="/NewsSearch" element={<NewsSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
