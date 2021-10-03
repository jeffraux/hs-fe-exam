import React from 'react';

const H1 = ({ children }) => {
  return (
    <h1 className="text-2xl font-bold leading-7 text-gray-900 py-4 sm:text-3xl sm:truncate">
      {children}
    </h1>
  );
};

export default H1;
