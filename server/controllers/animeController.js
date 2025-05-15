const fetch = require("node-fetch");
const supabase = require("../db/supabaseClient");

// GET anime recommendations
const getRecommendations = async (req, res) => {
  try {
    console.log("Fetching anime from Jikan API...");

    const response = await fetch("https://api.jikan.moe/v4/anime?q=naruto");

    console.log("Jikan API response status:", response.status);

    if (!response.ok) {
      console.error(
        "Jikan API response error:",
        response.status,
        response.statusText
      );
      return res
        .status(500)
        .json({ error: "Jikan API failed: " + response.statusText });
    }

    const data = await response.json();
    console.log(
      "Successfully fetched anime data:",
      data.data?.length || 0,
      "items"
    );
    res.json(data.data);
  } catch (error) {
    console.error("❌ Fetch error object:", error);
    console.error("❌ Fetch error message:", error.message);
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
};

// POST to watchlist
const saveWatchlist = async (req, res) => {
  const { title, userId } = req.body;

  const { data, error } = await supabase
    .from("watchlist")
    .insert([{ title, user_id: userId }]);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to save watchlist item" });
  }

  res.status(200).json({ message: "Saved!", data });
};

module.exports = { getRecommendations, saveWatchlist };
