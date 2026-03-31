import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 flex flex-col h-full">
      <div className="h-48 overflow-hidden flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2 min-h-[40px]">
          {product.title}
        </h3>
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="text-xs text-gray-600">{product.rating?.rate} ({product.rating?.count})</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
