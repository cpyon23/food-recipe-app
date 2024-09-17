import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchRecipes('chicken'); // Default search
  }, []);

  const fetchRecipes = async (term) => {
    const { data } = await axios.get(`${API_URL}${term}`);
    setRecipes(data.meals || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(searchTerm);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900`}>
      {/* Header */}
      <header className="fixed top-1 inset-x-0 z-50 mx-auto max-w-3xl rounded-full bg-gray-100 dark:bg-gray-700 shadow-md transition-opacity duration-500 ease-in-out ">
        <div className="container mx-auto flex justify-between items-center">
          <form onSubmit={handleSearch} className="flex items-center space-x-2 w-full">
            <button className="text-2xl p-2">🏠</button>
            <input
              type="text"
              className="rounded-full px-4 py-2 w-full bg-white text-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none"
              placeholder="Search for recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 rounded-full text-white"
            >
              Search
            </button>
          </form>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 bg-yellow-500 rounded-full text-white"
          >
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </header>

      {/* Recipe Cards */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-white mb-4">Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;