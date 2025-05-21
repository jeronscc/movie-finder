## Setup Instructions

### 1. Clone the Repository
   
```bash
git clone https://github.com/jeronscc/now-showing.git
cd now-showing
```

### 2. Install Dependencies
   
```bash
npm install
```

### 3. TMDB API Setup

You need an API key from The Movie Database (TMDB):

- Sign up/log in at [https://www.themoviedb.org/](https://www.themoviedb.org/)
- Go to your API settings
- Copy your API key (v3 auth)

Create a `.env` file in the root directory with the following content, following the format in `.env.example`:
```env
# Example environment variables
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### 4. Start the Development Server
   
```bash
npm run dev
```

Open your browser and go to the localhost URL shown in your terminal (e.g., `http://localhost:5173/`).

## Project Structure

```plaintext
src/
├── components/
│   ├── MovieCard.jsx
│   ├── MovieModal.jsx
│   ├── NavBar.jsx
├── contexts/
│   └── MovieContext.jsx
├── services/
│   └── api.js
├── css/
│   ├── App.css
│   ├── Favorites.css
│   ├── Home.css
│   ├── index.css
│   ├── MovieCard.css
│   ├── MovieModal.css
│   └── NavBar.css
├── pages/
│   ├── Home.jsx
│   └── Favorites.jsx
├── App.jsx
└── index.js
