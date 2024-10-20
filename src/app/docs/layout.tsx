// app/layout.tsx
import React from 'react';
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">    
    {children}
    </div>
  );
};

export default MainLayout;
