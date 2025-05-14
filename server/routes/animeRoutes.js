const express = require('express');
const router = express.Router();
const { getRecommendations, saveWatchlist } = require('../controllers/animeController'); 


router.get('/recommendations', getRecommendations);
router.post('/watchlist', saveWatchlist);

module.exports = router;
