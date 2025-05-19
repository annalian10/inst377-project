import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export const getRecommendations = async (req, res) => {
  try {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    const json = await response.json();
    const recommendations = json.data.map((anime) => ({
      title: anime.title,
      image: anime.images.jpg.image_url,
    }));
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
};

export const saveWatchlist = async (req, res) => {
  try {
    const { title, image } = req.body;

    const { data, error } = await supabase
      .from("watchlists")
      .insert([{ title, image }]);

    if (error) {
      throw error;
    }

    res.status(200).json({ message: "Saved successfully!", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
