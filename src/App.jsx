import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';
import Header from './components/Header'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';
const SEARCH_URL = `${API_URL}search.php?s=`;
const CATEGORY_URL = `${API_URL}filter.php?c=`;
const CATEGORIES_LIST_URL = `${API_URL}categories.php`;

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes(''); // Default search
    fetchCategories(); // Fetch available categories
  }, []);

  // Fetch recipes based on search term or category
  const fetchRecipes = async (term) => {
    const { data } = await axios.get(`${SEARCH_URL}${term}`);
    setRecipes(data.meals || []);
  };

  // Fetch available categories from the API
  const fetchCategories = async () => {
    const { data } = await axios.get(CATEGORIES_LIST_URL);
    setCategories(data.categories || []);
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900`}>
      {/* Header */}
      <Header />

      {/* Recipe Cards */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-white mb-4">Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          ) : (
            <p className="text-lg text-gray-600 dark:text-gray-400">No recipes found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
