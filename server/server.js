import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // pulls from .env
import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// 1. GET Recommendations
app.get('/api/anime/recommendations', async (req, res) => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

// 2. POST to Watchlist
app.post('/api/anime/watchlist', async (req, res) => {
  const { userId, title, mal_id } = req.body;

  const { error } = await supabase
    .from('watchlists')
    .insert([{ user_id: userId, anime_title: title, mal_id }]);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Saved to watchlist' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
