import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
  return (
    <button
      className={`bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 ${className}`}
      {...props}
    />
  );
};
