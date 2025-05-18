import express from 'express';
import { getRecommendations, saveWatchlist } from '../controllers/animeController.js';

const router = express.Router();

router.get('/recommendations', getRecommendations);
router.post('/watchlist', saveWatchlist);

export default router;