import Link from 'next/link';
export default function NavLeftOptionCourse(){
    return(
        <div>
             <div className=" flex px-2 py-5 bg-nav-hover-text-color items-center justify-between">
            <Link href="" className=" text-xl no-underline text-white">IELTS General Reading</Link>
            <label htmlFor="content_checkbox"
              ><i className=" text-white text-xl cursor-pointer fa-solid fa-angle-left"></i></label>
          </div>
          <div className="border-r-[1px] border-r-[#e0e0e0]">
            <ul className=" list-none">
              <li className="course-learn__item">
                <Link href="" className=" border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out"
                  >Bài học thử</Link
                >
              </li>
              <li className="course-learn__item">
                <Link href="courseVocabulary.html" className="border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                  Từ vựng TOEIC
                </Link>
              </li>
              <li className="course-learn__item">
                <Link href="" className="border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                  Video chữa đề chi tiết
                </Link>
              </li>
              <li className="course-learn__item">
                <Link href="" className="border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out"> PRACTICE ZONE </Link>
              </li>
              <li className="course-learn__item">
                <Link href="" className="border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                  GT Practice Set 7 Test 1: Luyện tập từ vựng
                </Link>
              </li>
            </ul>
          </div>
        </div>
    )
}