import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import animeRoutes from "./routes/animeRoutes.js";

app.use(cors());
app.use(express.json()); //

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/anime", animeRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
