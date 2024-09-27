import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';
import Header from './components/Header';
import RecipePage from './components/RecipePage'; // Import RecipePage

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';
const SEARCH_URL = `${API_URL}search.php?s=`;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchRecipes(''); // Default search
  }, []);

  // Fetch recipes based on search term
  const fetchRecipes = async (term) => {
    const { data } = await axios.get(`${SEARCH_URL}${term}`);
    setRecipes(data.meals || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(searchTerm); // Fetch meals by search term
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
    <Router>
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-800`}>
        {/* Header */}
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Routes>
          {/* Home Page showing the list of recipes */}
          <Route
            path="/"
            element={
              <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-gray-700 dark:text-white mb-4">Recipes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                      <RecipeCard key={recipe.idMeal} recipe={recipe} />
                    ))
                  ) : (
                    <p className="text-lg text-gray-600 dark:text-gray-400">No recipes found.</p>
                  )}
                </div>
              </div>
            }
          />
          {/* Recipe detail page */}
          <Route path="/recipe/:idMeal" element={<RecipePage recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
