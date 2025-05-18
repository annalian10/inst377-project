import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Watchlist from './pages/Watchlist';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
