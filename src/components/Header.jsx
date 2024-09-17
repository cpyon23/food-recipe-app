import React from 'react';

function Header({
  searchTerm,
  setSearchTerm,
  handleSearch,
  selectedCategory,
  handleCategoryChange,
  categories,
  isDarkMode,
  toggleDarkMode,
}) {
  return (
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
            disabled={selectedCategory !== ''}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 rounded-full text-white"
          >
            Search
          </button>
        </form>

        {/* Category Dropdown */}
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          className="ml-4 px-4 py-2 bg-white dark:bg-gray-700 dark:text-white rounded-full focus:outline-none"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>

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
