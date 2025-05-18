import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';

export default function Discover() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function fetchAnime() {
      const res = await fetch('https://api.jikan.moe/v4/top/anime');
      const data = await res.json();
      setAnimeList(data.data);
      setFiltered(data.data);
    }
    fetchAnime();
  }, []);

  useEffect(() => {
    const fuse = new Fuse(animeList, {
      keys: ['title'],
      threshold: 0.3,
    });

    if (search.trim()) {
      const result = fuse.search(search).map(r => r.item);
      setFiltered(result);
    } else {
      setFiltered(animeList);
    }
  }, [search, animeList]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Search Anime</h2>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder="Search for a title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(anime => (
          <div key={anime.mal_id} className="bg-gray-100 rounded shadow p-2">
            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full" />
            <h4 className="mt-2 font-bold text-sm">{anime.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
