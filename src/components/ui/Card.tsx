import React from 'react';

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="border rounded-lg shadow-md p-4">{children}</div>
);

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="border-b mb-2">{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <h2 className={`text-xl font-bold ${className}`}>{children}</h2>
);

// Update CardDescription to accept className prop
export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
);

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);
