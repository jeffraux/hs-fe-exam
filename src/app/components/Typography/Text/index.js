import React from 'react';

const Text = ({ children, customClass, ...props }) => {
  return (
    <p
      className={`
        mt-1
        max-w-2xl
        text-sm
        text-gray-900
        ${customClass || ''}
      `}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
