import React from 'react';
import Products from '../components/Products';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen flex-grow bg-opacity-50">
      <div className="relative w-full">
        <img
          src="/src/assets/image.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
