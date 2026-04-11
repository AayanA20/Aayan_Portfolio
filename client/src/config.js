const config = {
  // In production (Vercel), set VITE_API_URL to your Render backend URL
  // e.g. https://your-app-name.onrender.com
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:11000'
};

export default config;