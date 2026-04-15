import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (

     <div className="min-h-screen flex flex-col items-center justify-center  text-center px-4">
      
      <h1 className="text-7xl font-bold text-green-600">404</h1>
      
      <p className="text-xl mt-4 font-semibold">Page Not Found</p>
      
      <p className="text-gray-500 mt-2">
        Oops! The page you are looking for doesn’t exist.
      </p>

      <Link to="/">
        <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Go Home
        </button>
      </Link>

    </div>

   
  );
};

export default ErrorPage;