import Link from 'next/link';
import React from 'react';
import NavLeftCourse from '@/app/components/course/navLeftCourse'; // Correct import
import BodyMainCourse from '@/app/components/course/bodyMainCourse';

export default function Layout({
  test1,
  test2,
}: {
  test1: React.ReactNode;
  test2: React.ReactNode;
}) {
  return (
    <div className="content__container">
      <input type="checkbox" id="content_checkbox" className=" peer/checkboxTranslate hidden" />
      <NavLeftCourse>
        {test1}
      </NavLeftCourse>
      <BodyMainCourse>
        {test2}
      </BodyMainCourse>
    </div>
  );
}
