import React from 'react';
import { useParams } from 'react-router-dom';

function RecipePage({ recipes }) {
  const { idMeal } = useParams(); // Extract the recipe id from the URL
  const recipe = recipes.find((recipe) => recipe.idMeal === idMeal);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-8 min-h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <img
          className="w-full lg:w-1/2 h-auto object-cover"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />

        {/* Description Section */}
        <div className="p-4 w-full lg:w-1/2 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {recipe.strMeal}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
            <span className="font-semibold">Category:</span> {recipe.strCategory}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
            <span className="font-semibold">Area:</span> {recipe.strArea}
          </p>

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
      </div>
    </div>
  );
}

export default RecipePage;
