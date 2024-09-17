import React, { useState } from 'react';

function RecipeCard({ recipe }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
        expanded
          ? 'fixed top-0 left-0 w-full h-full z-50'
          : 'relative max-h-96'
      }`}
    >
      <img
        className={`w-full ${expanded ? 'h-1/3' : 'h-48'} object-cover`}
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />

      <div className={`p-4 ${expanded ? 'h-2/3 overflow-y-auto' : ''}`}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {recipe.strMeal}
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">
          <span className="font-semibold">Category:</span> {recipe.strCategory}
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
          <span className="font-semibold">Area:</span> {recipe.strArea}
        </p>

        <button
          onClick={toggleExpanded}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full transition-transform transform hover:scale-105 focus:outline-none"
        >
          {expanded ? 'Hide Recipe' : 'View Recipe'}
        </button>

        {expanded && (
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              Ingredients
            </h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {Object.keys(recipe)
                .filter((key) => key.includes('strIngredient') && recipe[key])
                .map((key) => (
                  <li key={key} className="text-gray-600 dark:text-gray-400">
                    {recipe[key]}
                  </li>
                ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              Instructions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {recipe.strInstructions.split('\n').map((paragraph, index) => (
                <span key={index} className="block mb-2">
                  {paragraph}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
