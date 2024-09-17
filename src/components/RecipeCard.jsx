import React, { useState } from 'react';

function RecipeCard({ recipe }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
        expanded ? 'max-h-screen' : 'max-h-96'
      }`}
    >
      <img
        className="w-full h-48 object-cover"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{recipe.strMeal}</h2>
        <p className="text-gray-500 dark:text-gray-400">Category: {recipe.strCategory}</p>
        <p className="text-gray-500 dark:text-gray-400">Area: {recipe.strArea}</p>

        <button
          onClick={toggleExpanded}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full transition-transform transform hover:scale-105"
        >
          {expanded ? 'Hide Recipe' : 'View Recipe'}
        </button>

        {expanded && (
          <div className="mt-4">
            <h3 className="font-bold text-gray-700 dark:text-gray-300">Ingredients:</h3>
            <ul className="list-disc list-inside">
              {Object.keys(recipe)
                .filter((key) => key.includes('strIngredient') && recipe[key])
                .map((key) => (
                  <li key={key} className="text-gray-600 dark:text-gray-400">{recipe[key]}</li>
                ))}
            </ul>
            <h3 className="font-bold text-gray-700 dark:text-gray-300 mt-2">Instructions:</h3>
            <p className="text-gray-600 dark:text-gray-400">{recipe.strInstructions}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;