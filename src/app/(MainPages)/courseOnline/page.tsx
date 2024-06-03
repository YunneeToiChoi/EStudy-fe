import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";

import GetAllCourses from './getAllCourse';

const wordss = ["trực tuyến", "chất lượng", "chuẩn CEFR"];

const words = ` Những khoá học tiếng Anh online chất lượng cao của E-STUDY được thiết
kế theo chương trình tiếng Anh chuẩn CEFR (A1-C2) của đại học
Cambridge và Oxford (Anh) với hệ thống bài giảng, bài tập phong phú
đa dạng. Bạn có thể học thử miễn phí trước khi đặt mua sản phẩm.`;

export default function CourseOnline()
{
    return(
        <div className=" pt-10 max-w-[1440px] max-2xl:max-w-7xl max-xl:max-w-5xl m-auto">
      <div className="">
        <div className="">
          <h1 className=" text-4xl font-semibold">Khóa học<span className=" text-primary-bg-color"><FlipWords className="text-primary-bg-color" words={wordss} /></span></h1>
          <div className="content__text">
          <TextGenerateEffect words={words} />
          </div>
        </div>
        <GetAllCourses></GetAllCourses>
      </div>
    </div>
    )
}