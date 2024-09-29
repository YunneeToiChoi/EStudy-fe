// app/layout.tsx
import React from 'react';
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='bg-black pb-10'>
    {children}
    </div>
  );
};

export default MainLayout;
