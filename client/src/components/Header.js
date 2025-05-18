import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="flex justify-between p-4 bg-indigo-600 text-white shadow">
      <h1 className="text-xl font-bold">Anime & Manga Hub</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </nav>
  );
}
