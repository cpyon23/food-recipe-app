import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const viewRecipe = () => {
    navigate(`/recipe/${recipe.idMeal}`); // Assuming each recipe has a unique id (idMeal)
  };
  
  return (
    <button 
      data-aos="fade-up"
      data-aos-delay="100"
      onClick={viewRecipe}
      className="bg-transparent rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out relative max-h-96"
    >
      {/* Image Section */}
      <img
        className="w-full h-48 rounded-b-3xl object-cover"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />

      {/* Description Section */}
      <div className="p-4 w-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {recipe.strMeal}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">
            <span className="font-semibold">Category:</span> {recipe.strCategory}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">
            <span className="font-semibold">Area:</span> {recipe.strArea}
          </p>
        </div>
      </div>
    </button>
  );
}

export default RecipeCard;