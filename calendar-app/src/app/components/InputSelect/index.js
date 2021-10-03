import React from 'react';

const InputSelect = ({ name, label, value, customClass, children, ...props }) => {
  return (
    <div
      className={`
        max-w-sm
        border
        border-gray-300
        rounded-md
        sm:text-sm
        customSelect
        ${customClass || ''}
      `}
    >
      <select
        id={name}
        name={name}
        className="w-full p-2 bg-transparent"
        {...props}
      >
        {label && <option value="">{label}</option>}
        {children}
      </select>
    </div>
  );
};

export default InputSelect;
