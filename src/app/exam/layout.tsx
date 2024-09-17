// app/layout.tsx
import React from 'react';
import Header from "@/app/components/partialView/header";
import Footer from "@/app/components/partialView/footer";
const ExamLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  );
};

export default ExamLayout;
