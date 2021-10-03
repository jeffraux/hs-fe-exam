import React from 'react';

const Input = ({ name, customClass, ...props }) => {
  return (
    <input
      type="text"
      name={name}
      id={name}
      className={`
        max-w-sm
        py-2
        px-3
        sm:text-sm
        border
        border-gray-300
        rounded-md
        ${customClass || ''}
      `}
      {...props}
    />
  );
};

export default Input;
