const fetch = require('node-fetch');
const supabase = require('../db/supabaseClient');

// GET anime recommendations
const getRecommendations = async (req, res) => {
    try {
        const response = await fetch('https://api.jikan.moe/v4/anime?q=naruto');
        const data = await response.json();
        res.json(data.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch recommendations' });
    }
};

// POST to watchlist
const saveWatchlist = async (req, res) => {
    const { title, userId} = req.body;

        const { data, error } = await supabase
            .from('watchlist')
            .insert([{ title, user_id: userId }]);

        if (error) {
           console.error(error);
           return res.status(500).json({ error: 'Failed to save watchlist item' });
        }

        res.status(200).json({ message: 'Saved!', data});
};

module.exports = { getRecommendations, saveWatchlist };
