
const express = required('express');
const cors = required('cors');
const dotenv = required('dotenv');
const animalRoutes = required('./routes/animalRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/animals', animalRoutes);

app.get('/', (req, res) => {
    res.send('API is running!');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});