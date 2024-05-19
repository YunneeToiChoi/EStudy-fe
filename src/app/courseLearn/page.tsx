import "./courseLearn.css"
export default function CourseLearn(){
    return(
        <div className="content__container">
        <input type="checkbox" id="content__checkbox" className="content__input" />
        <div className="content-left hide-on-mobile hide-on-tablet">
          <div className="flex__container header__container">
            <a href="" className="content-left__header">IELTS General Reading</a>
            <a href="" className="content-left__dropleft">
              <label htmlFor="content__checkbox"
                ><i className="content-left__icon fa-solid fa-angle-left"></i
              ></label>
            </a>
          </div>
          <div className="course-learn__container">
            <ul className="course-learn__list">
              <li className="course-learn__item">
                <a href="" className="course-learn__link course-learn__link--chosen"
                  >Bài học thử</a
                >
              </li>
              <li className="course-learn__item">
                <a href="courseVocabulary.html" className="course-learn__link">
                  Từ vựng TOEIC
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
        <div className="content-right">
          <nav className="nav__content-right">
            <div
              className="nav__content-header-right hide-on-mobile hide-on-tablet"
            >
              <a href="" className="nav__content-link-right"
                >IELTS General Reading
              </a>
              <i className="nav__content-right__icon fa-solid fa-chevron-right"></i>
              <span className="nav__content-transition-right">Bài học thử</span>
            </div>
            <label className="hide" htmlFor="nav-mobile-course-checkbox"
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