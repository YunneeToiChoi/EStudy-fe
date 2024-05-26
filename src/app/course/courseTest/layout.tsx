
import React from 'react';
import NavLeftCourse from '@/app/components/course/navLeftCourse'; // Correct import
import BodyMainCourse from '@/app/components/course/bodyMainCourse';
import NavLeftTestCourse from './navLeft';
export default function courseOption({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="content__container">
        <input type="checkbox" id="content_checkbox" className=" peer/checkboxTranslate hidden" />
        <NavLeftCourse>
        <NavLeftTestCourse/> 
        </NavLeftCourse>
        <BodyMainCourse>
            {children}
        </BodyMainCourse>
      </div>
    )
  }