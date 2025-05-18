import fetch from 'node-fetch';
import { supabase } from '../db/supabaseClient.js';

export const getRecommendations = async (req, res) => {
  try {
    const response = await fetch("https://api.jikan.moe/v4/anime?q=naruto");
    if (!response.ok) {
      return res.status(500).json({ error: "Jikan API failed: " + response.statusText });
    }
    const data = await response.json();
    res.json(data.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
};

export const saveWatchlist = async (req, res) => {
  const { title, userId } = req.body;

  const { data, error } = await supabase
    .from("watchlists")
    .insert([{ anime_title: title, user_id: userId }]);

  if (error) {
    return res.status(500).json({ error: "Failed to save watchlist item" });
  }

  res.status(200).json({ message: "Saved!", data });
};