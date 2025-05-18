// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Discover from './pages/Discover';
// import Watchlist from './pages/Watchlist';
// import Header from './components/Header';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <main className="p-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/discover" element={<Discover />} />
//           <Route path="/watchlist" element={<Watchlist />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;
// App.jsx
import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=10`);
    const data = await res.json();
    setResults(data.data);
  };

  return (
    <div className="app">
      <h1>Anime Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anime..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="results">
        {results.map((anime) => (
          <div key={anime.mal_id} className="anime-card">
            <h3>{anime.title}</h3>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <p>{anime.synopsis?.slice(0, 150) || 'No synopsis available.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
