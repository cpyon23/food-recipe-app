import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiList, FiMapPin, FiBookOpen } from 'react-icons/fi'; // Icons for added visuals

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
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      {/* Centered Image with Overlay */}
      <div className="relative max-w-5xl w-full h-[50vh]">
        <img
          data-aos="fade-down"
          className="absolute inset-0 w-full h-full object-cover rounded-b-3xl"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex items-end p-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white shadow-lg drop-shadow-lg">
            {recipe.strMeal}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto p-6 md:p-12 -mt-12 bg-white dark:bg-gray-800 shadow-2xl rounded-b-3xl space-y-12">
        {/* Recipe Details */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <FiList className="text-3xl text-cyan-700" />
            <div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Category
              </p>
              <p className="text-xl text-gray-800 dark:text-gray-200">
                {recipe.strCategory}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <FiMapPin className="text-3xl text-cyan-700" />
            <div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Area
              </p>
              <p className="text-xl text-gray-800 dark:text-gray-200">
                {recipe.strArea}
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Ingredients Section */}
        <div>
          <h2 data-aos="fade-left" className="text-2xl font-bold text-cyan-700 flex items-center mb-4">
            <FiList className="mr-2" /> Ingredients
          </h2>
          <ul
            data-aos="fade-up"
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600 dark:text-gray-400"
          >
            {Object.keys(recipe)
              .filter((key) => key.includes('strIngredient') && recipe[key])
              .map((key) => (
                <li key={key} className="text-lg">
                  {recipe[key]}
                </li>
              ))}
          </ul>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Instructions Section */}
        <div>
          <h2 data-aos="fade-left" className="text-2xl font-bold text-cyan-700 flex items-center mb-4">
            <FiBookOpen className="mr-2" /> Instructions
          </h2>
          <p
            data-aos="fade-down"
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4"
          >
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