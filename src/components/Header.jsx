import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Header({ searchTerm, setSearchTerm, handleSearch, isDarkMode, toggleDarkMode }) {
  const navigate = useNavigate(); // Initialize navigate

  const goHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <header className="fixed top-1 inset-x-0 z-50 mx-auto max-w-2xl rounded-full bg-gray-100 dark:bg-gray-700 shadow-md transition-opacity duration-500 ease-in-out ">
      <div className="container mx-auto flex justify-between items-center">
        <form onSubmit={handleSearch} className="flex items-center space-x-2 w-full">
            
            {/* Home Button */}
            <button type="button" onClick={goHome} className="text-2xl p-2">🏠</button>
            
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
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;
