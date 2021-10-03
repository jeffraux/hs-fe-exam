import React from 'react';

const Button = ({ children, color, customClass, ...props }) => {
  return (
    <span
      className={`
        bg-${color || 'gray'}-800
        hover:bg-${color || 'gray'}-500
        text-white
        px-3
        py-2
        rounded-md
        text-sm
        font-medium
        cursor-pointer
        ${customClass || ''}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

export default Button;
