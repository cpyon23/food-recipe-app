import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function RecipePage({ recipes }) {
  const { idMeal } = useParams(); // Extract the recipe id from the URL
  const recipe = recipes.find((recipe) => recipe.idMeal === idMeal);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-8 min-h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <img
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-full lg:w-1/2 h-auto object-cover"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
        />

        {/* Description Section */}
        <div className="p-4 w-full lg:w-1/2 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {recipe.strMeal}
          </h2>
          <p
            data-aos="fade-down"
            data-aos-delay="100" 
            className="text-lg text-gray-500 dark:text-gray-400 mb-4">
            <span className="font-semibold">Category:</span> {recipe.strCategory}
          </p>
          <p 
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-lg text-gray-500 dark:text-gray-400 mb-4">
            <span className="font-semibold">Area:</span> {recipe.strArea}
          </p>

          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
            Ingredients
          </h3>
          <ul 
            data-aos="fade-right"
            data-aos-delay="100"
            className="list-disc list-inside space-y-1 mb-4">
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
          <p 
            data-aos="fade-down"
            data-aos-delay="200"
            className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {recipe.strInstructions.split('\n').map((paragraph, index) => (
              <span 
                key={index} 
                className="block mb-2">
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
