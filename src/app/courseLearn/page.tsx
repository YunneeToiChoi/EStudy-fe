import "./courseLearn.css"
export default function CourseLearn(){
    return(
        <div className="content__container">
        <input type="checkbox" id="content__checkbox" className=" hidden" />
        <div className=" fixed z-[2] bg-white w-[300px] translate-x-0">
          <div className=" flex px-2 py-5 bg-nav-hover-text-color items-center justify-between">
            <a href="" className=" text-xl no-underline text-white">IELTS General Reading</a>
            <a href="" className=" text-inherit decoration-inherit">
              <label htmlFor="content__checkbox"
                ><i className=" text-white text-xl cursor-pointer fa-solid fa-angle-left"></i
              ></label>
            </a>
          </div>
          <div className=" border-r-[1px] border-r-[#e0e0e0]">
            <ul className=" list-none">
              <li className="course-learn__item">
                <a href="" className=" border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out"
                  >Bài học thử</a
                >
              </li>
              <li className="course-learn__item">
                <a href="courseVocabulary.html" className="border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                  Từ vựng TOEIC
                </a>
              </li>
              <li className="course-learn__item">
                <a href="" className="border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                  Video chữa đề chi tiết
                </a>
              </li>
              <li className="course-learn__item">
                <a href="" className="border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out"> PRACTICE ZONE </a>
              </li>
              <li className="course-learn__item">
                <a href="" className="border-l-4 border-l-transparent hover:border-l-nav-hover-text-color hover:bg-tag-search-bg-color block px-5 py-4 no-underline text-base text-black transition duration-300 ease-in-out">
                  GT Practice Set 7 Test 1: Luyện tập từ vựng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" ml-[300px] bg-[#D4F1F4] min-h-[1200px]">
          <nav className=" fixed bg-white border-b-[1px] border-b-course-border-color w-full p-4 flex items-center justify-between h-[60px]">
            <div
              className=" max-lg:hidden flex items-center"
            >
              <a href="" className=" no-underline text-nav-hover-text-color text-sm"
                >IELTS General Reading
              </a>
              <i className=" text-sm px-1 text-nav-hover-text-color fa-solid fa-chevron-right"></i>
              <span className="no-underline text-nav-hover-text-color text-sm font-medium">Bài học thử</span>
            </div>
            <label className="lg:hidden" htmlFor="nav-mobile-course-checkbox"
              ><i className="fa-solid fa-bars nav__icon"></i
            ></label>
          </nav>
          <input
            type="checkbox"
            id="nav-mobile-course-checkbox"
            className="nav-mobile-course__input"
          />
          <div className="nav__mobile-course hide">
            <div className="flex__container header__container">
              <a href="" className="content-left__header">IELTS General Reading</a>
              <a href="" className="content-left__dropleft">
                <label htmlFor="nav-mobile-course-checkbox"
                  ><i className="content-left__icon fa-solid fa-angle-left"></i
                ></label>
              </a>
            </div>
            <div className="course-learn__container">
              <ul className="course-learn__list">
                <li className="course-learn__item">
                  <a
                    href=""
                    className="course-learn__link course-learn__link--chosen"
                    >Bài học thử</a
                  >
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link">
                    Phương pháp làm các dạng câu hỏi trong IELTS General Reading
                  </a>
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link">
                    Video chữa đề chi tiết
                  </a>
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link"> PRACTICE ZONE </a>
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link">
                    GT Practice Set 7 Test 1: Luyện tập từ vựng
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-right__container">
            <div className="grid wide grid-wide-course-learn">
              <h1 className="content__header">Bài học thử</h1>
              <div className="content__box">
                <h2 className="content__box-header">Tiến độ học tập</h2>
                <p className="content__box-percent">0%</p>
                <div className="content__box-process"></div>
              </div>
              <div className="content__box">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <a href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Video bài giảng:</h3>
                  <span className="content__box-description"> Lý thuyết</span>
                </a>
                <a href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Video bài giảng:</h3>
                  <span className="content__box-description"> Lý thuyết</span>
                </a>
              </div>
              <div className="content__box">
                <h2 className="content__box-header">Hướng dẫn làm dạng T/F/NG</h2>
                <a href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Video bài giảng:</h3>
                  <span className="content__box-description"> Lý thuyết</span>
                </a>
                <a href="" className="content__box-course">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3 className="content__box-course-category">Video bài giảng:</h3>
                  <span className="content__box-description"> Lý thuyết</span>
                </a>
              </div>
              <a href="" className="content__transition-number">1</a>
            </div>
          </div>
        </div>
      </div>
    )
}