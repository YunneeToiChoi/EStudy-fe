// app/layout.tsx
import React from 'react';
import Header from "@/app/components/partialView/header"
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">
    <Header></Header>      
    {children}
    </div>
  );
};

export default MainLayout;
