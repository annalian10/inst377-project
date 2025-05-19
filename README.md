# inst377-project
# Anime Lens
# Anna Lian & Logan Le

# Anime Lens
A web-based anime and manga discovery platform for fans to explore trending shows, search by genre or keyword, save watchlists, and participate in community discussions.

---

## What is Anime Lens?
Anime Lens is designed to help users discover new anime and manga series based on their interests. With thousands of titles available across platforms, it can be overwhelming to find your next favorite show. Anime Lens solves this by integrating multiple anime APIs (like Jikan, AniList, and Kitsu) to offer real-time search, trending recommendations, and a space for users to save shows or leave comments in a community board.

**Key Features:**
- Anime search using keywords or filters  
- View trending anime suggestions  
- Create and manage a personal watchlist  
- Post comments and join discussions in the community section  
- Responsive design for both desktop and mobile browsers

---

## Target Browsers

Anime Lens is optimized for all major modern browsers and devices:
- **iOS**: Safari, Chrome (mobile)
- **Android**: Chrome, Firefox (mobile)
- **Desktop**: Chrome, Safari, Firefox, Edge

---

## Developer Manual

This section outlines how to set up, run, and maintain the Anime Lens project.

Vercel Link : https://inst377-project-five.vercel.app/

### 🛠 Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/annalian10/inst377-project.git
   cd inst377-project
   ```

2. **Install Dependencies**
   Make sure you have Node.js (v18+) installed.
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the `server/` directory:
   ```
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-api-key
   ```

4. **Start Backend Server**
   From the root project directory:
   ```bash
   npm start
   ```
   This runs the Express backend at `http://localhost:3001`.

5. **Run Frontend**
   Open `index.html` or deploy using Vercel.

---

### 📡 API Endpoints

#### `GET /api/anime/recommendations`
- Fetches trending anime using Jikan API.

#### `POST /api/anime/watchlist`
- Saves anime to a user's watchlist in Supabase.
- Request body example:
  ```json
  {
    "title": "Naruto",
    "image": "https://cdn.example.com/naruto.jpg"
  }
  ```

---

### 🐞 Known Bugs & Issues
- Anime search results may return null if external API rate limits are hit.
- Watchlist does not persist per-user (no auth system yet).
- Community page is static and not connected to a database.

---

### 🚧 Future Improvements
- Add user authentication (OAuth or Supabase Auth)
- Enable profile-based watchlists
- Support manga alongside anime
- Connect community board to Supabase
- Improve UI with theme toggles and animations
