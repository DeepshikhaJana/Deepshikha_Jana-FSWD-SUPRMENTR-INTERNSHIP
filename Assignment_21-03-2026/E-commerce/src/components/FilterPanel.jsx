import React from 'react';

const FilterPanel = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  priceRange, 
  setPriceRange 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>
      
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center group cursor-pointer">
            <input
              type="radio"
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={() => setSelectedCategory('all')}
            />
            <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors capitalize">All Products</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="flex items-center group cursor-pointer">
              <input
                type="radio"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />
              <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
          Price Range: <span className="text-blue-600 ml-1">${priceRange[0]} - ${priceRange[1]}</span>
        </h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 font-medium">
            <span>$0</span>
            <span>$1000+</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => {
          setSelectedCategory('all');
          setPriceRange([0, 1000]);
        }}
        className="w-full mt-8 text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;
