import React from 'react';

export const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <table className="min-w-full">{children}</table>
);

export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead className="bg-gray-200">{children}</thead>
);

export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tbody>{children}</tbody>
);

export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tr className="border-b">{children}</tr>
);

export const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th className="py-2 px-4 text-left">{children}</th>
);

export const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <td className={`py-2 px-4 ${className}`}>{children}</td>
);
