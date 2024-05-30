import Link from 'next/link';
export default function NavLeftTestCourse(){
    return(
        <div>
            <div className="flex px-2 py-5 bg-nav-hover-text-color items-center justify-between">
            <Link href="courseLearn.html" className="text-xl no-underline text-white">List 1</Link>
              <label htmlFor="content_checkbox"
                ><i className="text-white text-xl cursor-pointer fa-solid fa-angle-left"></i></label>
          </div>
          <div className="course-learn__container">
            <ul className="course-learn__list">
              <li className="course-learn__item">
                <Link
                  href="vocabularyFlashCard.html"
                  className=" text-sm border-l-[4px] border-l-transparent flex items-center p-3 no-underline text-black hover:border-l-nav-hover-text-color hover:bg-exam-bg-color transition duration-200"
                >
                  <i
                    className="fa-solid fa-circle-check text-green-600"
                  ></i>
                  <h3 className=" mx-2">Từ vựng:</h3>
                  <span
                    className=" text-base"
                  >
                    FlashCard</span>
                </Link>
              </li>
              <li className="course-learn__item">
                <Link
                  href="multichoiceLearn.html"
                  className="text-sm border-l-[4px] border-l-transparent flex items-center p-3 no-underline text-black hover:border-l-nav-hover-text-color hover:bg-exam-bg-color transition duration-200"
                >
                  <i
                    className="fa-solid fa-circle-check text-green-600"
                  ></i>
                  <h3 className=" mx-2">Luyện tập:</h3>
                  <span
                    className=" text-base"
                  >
                    Trắc nghiệm từ vựng</span
                  >
                </Link>
              </li>
              <li className="course-learn__item">
                <Link
                  href="findPairLearn.html"
                  className="text-sm border-l-[4px] border-l-transparent flex items-center p-3 no-underline text-black hover:border-l-nav-hover-text-color hover:bg-exam-bg-color transition duration-200"
                >
                  <i
                    className="fa-solid fa-circle-check text-green-600"
                  ></i>
                  <h3 className=" mx-2">Luyện tập:</h3>
                  <span
                    className=" text-base"
                  >
                    Tìm cặp</span
                  >
                </Link>
              </li>
              <li className="course-learn__item">
                <Link
                  href="listenLearn.html"
                  className="text-sm border-l-[4px] border-l-transparent flex items-center p-3 no-underline text-black hover:border-l-nav-hover-text-color hover:bg-exam-bg-color transition duration-200"
                >
                  <i
                    className="fa-solid fa-circle-check text-green-600"
                  ></i>
                  <h3 className=" mx-2">Luyện tập:</h3>
                  <span
                    className=" text-base"
                  >
                    Nghe từ vựng</span
                  >
                </Link>
              </li>
              <li className="course-learn__item">
                <Link
                  href="translateLearn.html"
                  className="text-sm border-l-[4px] border-l-transparent flex items-center p-3 no-underline text-black hover:border-l-nav-hover-text-color hover:bg-exam-bg-color transition duration-200"
                >
                  <i
                    className="fa-solid fa-circle-check text-green-600"
                  ></i>
                  <h3 className=" mx-2">Luyện tập:</h3>
                  <span
                    className=" text-base"
                  >
                    Dịch nghĩa / Điền từ</span
                  >
                </Link>
              </li>
              <li className="course-learn__item">
                <Link
                  href="listenSpell.html"
                  className="text-sm border-l-[4px] border-l-transparent flex items-center p-3 no-underline text-black hover:border-l-nav-hover-text-color hover:bg-exam-bg-color transition duration-200"
                >
                  <i
                    className="fa-solid fa-circle-check text-green-600"
                  ></i>
                  <h3 className=" mx-2">Luyện tập:</h3>
                  <span
                    className=" text-base"
                  >
                    Nghe chính tả</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    )
}