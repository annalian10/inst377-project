
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const animeRoutes = require('./routes/animeRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/anime', animeRoutes);

app.get('/', (req, res) => {
    res.send('API is running!');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});