import React from 'react';

export const Select: React.FC<{
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}> = ({ value, onValueChange, children }) => {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="border rounded-md p-2 w-full"
    >
      {children}
    </select>
  );
};

export const SelectValue: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <option value="" disabled>
      {placeholder}
    </option>
  );
};

export const SelectItem: React.FC<{ value: string; children: React.ReactNode }> = ({
  value,
  children,
}) => {
  return (
    <option value={value}>
      {children}
    </option>
  );
};
