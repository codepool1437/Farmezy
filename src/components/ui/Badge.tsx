import React from 'react';

interface BadgeProps {
  variant: 'success' | 'info' | 'warning';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  const variants = {
    success: 'bg-green-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-black',
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${variants[variant]}`}>
      {children}
    </span>
  );
};
